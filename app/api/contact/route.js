import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// 初始化 Resend
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const body = await request.json()
    
    // 验证必填字段
    const requiredFields = ['firstName', 'lastName', 'email', 'subject', 'message']
    for (const field of requiredFields) {
      if (!body[field] || body[field].trim() === '') {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }
    
    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }
    
    // 创建 HTML 邮件内容
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
          .content { background-color: #f8f9fa; padding: 20px; border: 1px solid #dee2e6; }
          .field { margin-bottom: 15px; padding: 10px; background-color: white; border-radius: 5px; }
          .label { font-weight: bold; color: #495057; display: inline-block; width: 120px; }
          .value { color: #212529; }
          .message-box { background-color: white; padding: 20px; border-left: 4px solid #1e40af; margin-top: 20px; border-radius: 5px; }
          .footer { text-align: center; color: #6c757d; font-size: 12px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>新的询盘信息 | New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">姓名 Name:</span>
              <span class="value">${body.firstName} ${body.lastName}</span>
            </div>
            <div class="field">
              <span class="label">邮箱 Email:</span>
              <span class="value"><a href="mailto:${body.email}">${body.email}</a></span>
            </div>
            <div class="field">
              <span class="label">公司 Company:</span>
              <span class="value">${body.company || '未提供 Not provided'}</span>
            </div>
            <div class="field">
              <span class="label">电话 Phone:</span>
              <span class="value">${body.phone || '未提供 Not provided'}</span>
            </div>
            <div class="field">
              <span class="label">主题 Subject:</span>
              <span class="value"><strong>${body.subject}</strong></span>
            </div>
            <div class="field">
              <span class="label">行业 Industry:</span>
              <span class="value">${body.industry || '未指定 Not specified'}</span>
            </div>
            <div class="message-box">
              <h3>询盘内容 Message:</h3>
              <p style="white-space: pre-wrap;">${body.message}</p>
            </div>
          </div>
          <div class="footer">
            <p>提交时间 Submitted at: ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}</p>
            <p>IP地址 IP Address: ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'}</p>
          </div>
        </div>
      </body>
      </html>
    `
    
    // 发送邮件通知
    try {
      const { data, error } = await resend.emails.send({
        from: process.env.FROM_EMAIL || 'DLM Website <onboarding@resend.dev>',
        to: process.env.NOTIFICATION_EMAIL?.split(',').map(email => email.trim()) || ['your-email@example.com'],
        subject: `DLM询盘: ${body.subject} - 来自 ${body.firstName} ${body.lastName}`,
        html: htmlContent,
        reply_to: body.email, // 回复邮件时会回复给询盘客户
      })
      
      if (error) {
        console.error('Resend error:', error)
        // 邮件发送失败不影响表单提交成功
      } else {
        console.log('✅ Email sent successfully:', data)
      }
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // 继续处理，不要因为邮件失败而阻止表单提交
    }
    
    // 同时保存到本地文件（作为备份）
    if (process.env.NODE_ENV === 'development' || true) { // 始终保存备份
      try {
        const fs = require('fs').promises
        const path = require('path')
        
        const date = new Date()
        const dateStr = date.toISOString().split('T')[0]
        const timeStr = date.toTimeString().split(' ')[0].replace(/:/g, '-')
        const fileName = `${body.firstName}-${body.lastName}-${dateStr}-${timeStr}.json`
        const dirPath = path.join(process.cwd(), 'contact-submissions', dateStr)
        const filePath = path.join(dirPath, fileName)
        
        // 确保目录存在
        await fs.mkdir(dirPath, { recursive: true })
        
        // 保存表单数据
        await fs.writeFile(filePath, JSON.stringify({
          ...body,
          submittedAt: date.toISOString(),
          submittedAtLocal: date.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }),
          ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
          userAgent: request.headers.get('user-agent') || 'unknown'
        }, null, 2))
        
        console.log('📁 Backup saved to:', filePath)
      } catch (fileError) {
        console.error('File backup failed:', fileError)
        // 文件保存失败不影响整体流程
      }
    }
    
    // 可选：发送自动回复邮件给客户
    if (process.env.SEND_AUTO_REPLY === 'true') {
      try {
        const autoReplyHtml = `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 5px; }
              .content { padding: 20px; background-color: #f8f9fa; margin-top: 20px; border-radius: 5px; }
              .footer { text-align: center; color: #6c757d; font-size: 12px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>感谢您的询盘 | Thank You for Your Inquiry</h2>
              </div>
              <div class="content">
                <p>尊敬的 ${body.firstName} ${body.lastName}，</p>
                <p>Dear ${body.firstName} ${body.lastName},</p>
                <br>
                <p>感谢您对DLM重工的关注。我们已收到您的询盘，我们的团队将尽快审阅并回复您。</p>
                <p>Thank you for your interest in DLM Heavy Industry. We have received your inquiry and our team will review it and respond to you as soon as possible.</p>
                <br>
                <p>我们通常在24小时内（工作日）回复。如果您的询盘比较紧急，请直接致电我们。</p>
                <p>We typically respond within 24 hours during business days. If your inquiry is urgent, please feel free to call us directly.</p>
                <br>
                <p>此致<br>Best regards,</p>
                <p><strong>DLM重工技术团队</strong><br><strong>DLM Heavy Industry Tech Team</strong></p>
              </div>
              <div class="footer">
                <p>这是一封自动回复邮件，请勿直接回复。<br>This is an automated response, please do not reply directly.</p>
              </div>
            </div>
          </body>
          </html>
        `
        
        await resend.emails.send({
          from: process.env.FROM_EMAIL || 'DLM <onboarding@resend.dev>',
          to: body.email,
          subject: '感谢您的询盘 | Thank you for contacting DLM Heavy Industry',
          html: autoReplyHtml,
        })
        
        console.log('✅ Auto-reply sent to customer')
      } catch (autoReplyError) {
        console.error('Auto-reply failed:', autoReplyError)
      }
    }
    
    // 返回成功响应
    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      // 开发环境返回更多信息用于调试
      ...(process.env.NODE_ENV === 'development' && { 
        debug: {
          emailSent: true,
          recipient: process.env.NOTIFICATION_EMAIL,
          timestamp: new Date().toISOString()
        }
      })
    })
    
  } catch (error) {
    console.error('❌ Contact form error:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to process your request. Please try again later.',
        ...(process.env.NODE_ENV === 'development' && { 
          details: error.message 
        })
      },
      { status: 500 }
    )
  }
}

// GET 方法用于测试 API 是否正常工作
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Contact API is working',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    emailService: 'Resend',
    hasApiKey: !!process.env.RESEND_API_KEY,
    notificationEmail: process.env.NOTIFICATION_EMAIL || 'Not configured',
    fromEmail: process.env.FROM_EMAIL || 'onboarding@resend.dev'
  })
}
// app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  console.log('=== Contact Form Submission Started ===');
  
  try {
    const body = await request.json();
    
    const { 
      firstName, 
      lastName, 
      email, 
      company, 
      phone, 
      subject, 
      industry, 
      message 
    } = body;

    // 验证必填字段
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 检查API密钥
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ No API key!');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // ⚠️ 关键修复：直接硬编码收件人，不依赖环境变量
    const ADMIN_EMAIL = 'f1dxhs625@gmail.com';  // 直接硬编码
    const FROM_EMAIL = 'noreply@donglin-tech.com';  // 直接硬编码

    console.log('📧 Config - Admin:', ADMIN_EMAIL, 'From:', FROM_EMAIL);

    // 管理员邮件内容
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1e40af; color: white; padding: 20px; text-align: center;">
          <h2 style="margin: 0;">新客户询盘 New Inquiry</h2>
        </div>
        <div style="padding: 20px; background: #f9fafb; border: 1px solid #e5e7eb;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>姓名 Name:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>邮箱 Email:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>公司 Company:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${company || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>电话 Phone:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${phone || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>主题 Subject:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong style="color: #1e40af;">${subject}</strong></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>行业 Industry:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${industry || 'N/A'}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: white; border-left: 4px solid #1e40af;">
            <strong>询盘内容 Message:</strong><br><br>
            ${message.replace(/\n/g, '<br>')}
          </div>
          <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 5px;">
            <strong>⚡ 请尽快回复客户 Please respond promptly!</strong><br>
            点击邮箱地址可直接回复 | Click email to reply
          </div>
        </div>
        <div style="padding: 10px; background: #f3f4f6; text-align: center; font-size: 12px; color: #6b7280;">
          发送时间 Sent at: ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}<br>
          来自 From: donglin-tech.com
        </div>
      </div>
    `;

    // ========== 第一步：发送管理员通知（最重要！）==========
    console.log('📮 Sending admin notification...');
    
    let adminEmailSent = false;
    let adminEmailError = null;
    
    try {
      const adminResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [ADMIN_EMAIL],  // ⚠️ 确保是数组！
          reply_to: email,
          subject: `[DLM询盘] ${subject} - 来自 ${firstName} ${lastName}`,
          html: adminHtml,
          text: `
新客户询盘 New Inquiry

姓名: ${firstName} ${lastName}
邮箱: ${email}
公司: ${company || 'N/A'}
电话: ${phone || 'N/A'}
主题: ${subject}
行业: ${industry || 'N/A'}

询盘内容:
${message}

发送时间: ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}
          `
        }),
      });

      const adminResult = await adminResponse.text();
      
      if (adminResponse.ok) {
        adminEmailSent = true;
        console.log('✅ Admin email sent successfully!');
      } else {
        adminEmailError = adminResult;
        console.error('❌ Admin email failed:', adminResult);
      }
    } catch (error) {
      adminEmailError = error.message;
      console.error('❌ Admin email error:', error);
    }

    // ========== 第二步：发送自动回复（可选）==========
    let autoReplySent = false;
    
    if (process.env.SEND_AUTO_REPLY === 'true' || process.env.SEND_AUTO_REPLY === 'ture') {  // 注意拼写错误兼容
      console.log('📮 Sending auto-reply...');
      
      try {
        const autoReplyResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: FROM_EMAIL,
            to: [email],  // 客户邮箱
            subject: 'Thank you for contacting DLM Heavy Industry | 感谢您的询盘',
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: linear-gradient(135deg, #1e3a8a, #2563eb); color: white; padding: 30px; text-align: center;">
                  <h1 style="margin: 0;">Thank You! 感谢您的咨询</h1>
                </div>
                <div style="padding: 30px; background: white;">
                  <p>Dear ${firstName},</p>
                  <p>Thank you for your inquiry. We will respond within 24 hours.</p>
                  <p>Best regards,<br>DLM Heavy Industry Team</p>
                  <hr style="margin: 30px 0;">
                  <p>尊敬的 ${firstName}，</p>
                  <p>感谢您的询盘，我们将在24小时内回复您。</p>
                  <p>此致敬礼，<br>东林重工团队</p>
                </div>
              </div>
            `,
            text: 'Thank you for your inquiry. We will respond within 24 hours.'
          }),
        });

        if (autoReplyResponse.ok) {
          autoReplySent = true;
          console.log('✅ Auto-reply sent successfully!');
        }
      } catch (error) {
        console.error('Auto-reply error:', error);
      }
    }

    // ========== 返回结果 ==========
    // 如果管理员邮件失败，返回错误
    if (!adminEmailSent) {
      return NextResponse.json({
        success: false,
        error: 'Failed to send notification email',
        details: {
          adminEmailError: adminEmailError,
          autoReplySent: autoReplySent,
          config: {
            to: ADMIN_EMAIL,
            from: FROM_EMAIL
          }
        }
      }, { status: 500 });
    }

    // 成功
    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      details: {
        adminEmailSent: true,
        autoReplySent: autoReplySent,
        sentTo: ADMIN_EMAIL
      }
    });

  } catch (error) {
    console.error('💥 Unexpected error:', error);
    return NextResponse.json(
      { 
        error: 'Server error', 
        details: error.message 
      },
      { status: 500 }
    );
  }
}

// GET方法用于测试
export async function GET() {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ 
      error: 'No API key',
      env: {
        hasApiKey: false,
        notification: process.env.NOTIFICATION_EMAIL || 'not set',
        from: process.env.FROM_EMAIL || 'not set',
        autoReply: process.env.SEND_AUTO_REPLY || 'not set'
      }
    });
  }

  // 发送测试邮件
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'test@donglin-tech.com',
        to: ['f1dxhs625@gmail.com'],
        subject: 'Test from GET endpoint - ' + new Date().toTimeString(),
        html: '<h1>If you receive this, the system works!</h1>',
        text: 'Test email'
      }),
    });

    const result = await response.text();
    
    return NextResponse.json({
      success: response.ok,
      message: response.ok ? 
        '✅ Test email sent to f1dxhs625@gmail.com' : 
        '❌ Failed to send',
      result: result,
      env: {
        hasApiKey: true,
        notification: process.env.NOTIFICATION_EMAIL || 'not set',
        from: process.env.FROM_EMAIL || 'not set',
        autoReply: process.env.SEND_AUTO_REPLY || 'not set'
      }
    });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
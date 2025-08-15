'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [showWechatQR, setShowWechatQR] = useState(false);
  
  const productLinks = [
    { name: 'Belt Conveyor Systems', href: '/products/belt-conveyor' },
    { name: 'Tubular Belt Conveyor', href: '/products/pipe-belt-conveyor' },
    { name: 'Large Angle Conveyor', href: '/products/large-angle-conveyor' },
    { name: 'Bucket Elevator Systems', href: '/products/bucket-elevator' },
  ]

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Development History', href: '/about#development-Journey' },
    { name: 'Manufacturing Capabilities', href: '/research-manufacturing#manufacturing-devices' },
    { name: 'Quality & Certifications', href: '/research-manufacturing#quality-assurance' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">DLM</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">DLM Heavy Industry</h3>
                <p className="text-gray-400 text-sm">东林重工</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Sichuan DLM Heavy Industry Tech Co., LTD specializes in bulk material handling, combining design, R&D, and manufacturing. We deliver reliable transport solutions across industries with durable installations, sustainable modules, and efficient service.
            </p>
            
            {/* 社交媒体图标 */}
            <div className="flex space-x-4">
              {/* 微信公众号 - 点击显示二维码 */}
              <div className="relative">
                <button
                  onClick={() => setShowWechatQR(!showWechatQR)}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  title="WeChat Official Account"
                >
                  {/* 微信图标 */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
                  </svg>
                </button>
                
                {/* 微信二维码弹出框 */}
                {showWechatQR && (
                  <div className="absolute bottom-12 left-0 bg-white p-3 rounded-lg shadow-xl z-50">
                    <div className="text-gray-900 text-center">
                      <p className="text-sm font-semibold mb-2">Wechat</p>
                      {/* 这里放置二维码图片 */}
                      <div className="w-48 h-48 bg-gray-200 flex items-center justify-center rounded">
                        <img 
                          src="/images/wechat-qr.png" 
                          alt="WeChat QR Code" 
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `
                              <div class="text-gray-500 text-xs p-2">
                                <p>请添加二维码</p>
                                <p>/images/wechat-qr.png</p>
                              </div>
                            `;
                          }}
                        />
                      </div>
                      <p className="text-xs mt-2 text-gray-600">scan</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Contact Info</h5>
              <div className="text-gray-400 text-sm space-y-1">
                <p>📧 info@donglin-tech.com</p>
                <p>📞 +86 136 0825 6917</p>
                <p>📍 Sichuan, China</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Sichuan DLM Heavy Industry Tech Co., LTD. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
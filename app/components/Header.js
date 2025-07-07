'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { 
      name: 'Products', 
      href: '/products',
      submenu: [
        { name: 'Fixed Belt Conveyor Systems', href: '/products/fixed-belt-conveyor' },
        { name: 'Tubular Belt Conveyor', href: '/products/tubular-belt-conveyor' },
        { name: 'Large Angle Conveyor', href: '/products/large-angle-conveyor' },
        { name: 'Bucket Elevator Systems', href: '/products/bucket-elevator' },
        { name: 'Tunnel Boring Conveyor', href: '/products/tunnel-boring' },
        { name: 'CBMEPTS Transfer System', href: '/products/cbmepts' },
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      submenu: [
        { name: 'Mining & Minerals', href: '/solutions/mining' },
        { name: 'Ports & Terminals', href: '/solutions/ports' },
        { name: 'Power Generation', href: '/solutions/power' },
        { name: 'Cement & Building Materials', href: '/solutions/cement' },
        { name: 'Coal & Chemical', href: '/solutions/chemical' },
      ]
    },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">DLM</span>
            </div>
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-900">DLM</h1>
              <p className="text-xs text-gray-600">Heavy Industry Tech</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <div className="relative">
                      <button
                        className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
                          isActive(item.href)
                            ? 'text-blue-600'
                            : 'text-gray-700 hover:text-blue-600'
                        }`}
                        onMouseEnter={() => {
                          if (item.name === 'Products') setIsProductsOpen(true)
                          if (item.name === 'Solutions') setIsSolutionsOpen(true)
                        }}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div 
                        className={`absolute left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ${
                          (item.name === 'Products' && isProductsOpen) || 
                          (item.name === 'Solutions' && isSolutionsOpen)
                            ? 'opacity-100 visible transform translate-y-0'
                            : 'opacity-0 invisible transform -translate-y-2'
                        }`}
                        onMouseEnter={() => {
                          if (item.name === 'Products') setIsProductsOpen(true)
                          if (item.name === 'Solutions') setIsSolutionsOpen(true)
                        }}
                        onMouseLeave={() => {
                          if (item.name === 'Products') setIsProductsOpen(false)
                          if (item.name === 'Solutions') setIsSolutionsOpen(false)
                        }}
                      >
                        <div className="py-2">
                          <Link
                            href={item.href}
                            className="block px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
                          >
                            View All {item.name}
                          </Link>
                          <div className="border-t border-gray-100"></div>
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors ml-4"
              >
                Get Quote
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                
                {/* Mobile Submenu */}
                {item.submenu && (
                  <div className="pl-6 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link
              href="/contact"
              className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
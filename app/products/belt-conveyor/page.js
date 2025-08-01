'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ChevronRight, ArrowRight } from 'lucide-react'


export default function DTSeriesPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [activeScenario, setActiveScenario] = useState(0)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('.animate-section')
    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  // Key specifications
  const keySpecs = [
    { label: 'Belt Width', value: '500-2400mm', icon: '📏' },
    { label: 'Capacity', value: 'Max 10,000 t/h', icon: '⚡' },
    { label: 'Belt Speed', value: '0.8-6.5 m/s', icon: '🚀' },
    { label: 'Distance', value: 'Up to kilometers', icon: '📍' }
  ]

  // Application industries
  const industries = [
    { name: 'Mining', icon: '⛏️' },
    { name: 'Chemical', icon: '🧪' },
    { name: 'Coal', icon: '🏭' },
    { name: 'Building', icon: '🏗️' },
    { name: 'Power', icon: '⚡' },
    { name: 'Ports', icon: '🚢' }
  ]

  // Real project scenarios
  const projectScenarios = [
    {
      title: 'Aggregate Quarry in YangXin, China',
      // image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=800&h=600&fit=crop',
      image: '/images/products/belt_conveyor/belt_conveyor_case1.jpg',
      capacity: '8,000 t/h',
      length: '3.2 km',
      description: 'High-altitude copper mine conveyor system'
    },
    {
      title: 'Cement Plant in Zizhong, China',
      // image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      image: '/images/products/belt_conveyor/belt_conveyor_case2.jpg',
      capacity: '6,500 t/h',
      length: '1.8 km',
      description: 'Automated bulk material handling'
    },
    {
      title: 'Mine in South Africa',
      image: '/images/products/belt_conveyor/belt_conveyor_case5.jpg',
      capacity: '3,200 t/h',
      length: '950 m',
      description: 'Specialized corrosion-resistant system'
    }
  ]

  // Layout types with SVG representations
  const layouts = [
    { 
      type: 'Horizontal',
      svg: (
        <svg viewBox="0 0 200 50" className="w-full h-12">
          <line x1="20" y1="25" x2="180" y2="25" stroke="#4B5563" strokeWidth="3"/>
          <circle cx="20" cy="25" r="8" fill="none" stroke="#4B5563" strokeWidth="2"/>
          <circle cx="180" cy="25" r="8" fill="none" stroke="#4B5563" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      type: 'Inclined',
      svg: (
        <svg viewBox="0 0 200 50" className="w-full h-12">
          <line x1="20" y1="35" x2="180" y2="15" stroke="#4B5563" strokeWidth="3"/>
          <circle cx="20" cy="35" r="8" fill="none" stroke="#4B5563" strokeWidth="2"/>
          <circle cx="180" cy="15" r="8" fill="none" stroke="#4B5563" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      type: 'Convex Curve',
      svg: (
        <svg viewBox="0 0 200 50" className="w-full h-12">
          <path d="M 20 35 Q 100 5 180 35" fill="none" stroke="#4B5563" strokeWidth="3"/>
          <circle cx="20" cy="35" r="8" fill="none" stroke="#4B5563" strokeWidth="2"/>
          <circle cx="180" cy="35" r="8" fill="none" stroke="#4B5563" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      type: 'Concave Curve',
      svg: (
        <svg viewBox="0 0 200 50" className="w-full h-12">
          <path d="M 20 15 Q 100 45 180 15" fill="none" stroke="#4B5563" strokeWidth="3"/>
          <circle cx="20" cy="15" r="8" fill="none" stroke="#4B5563" strokeWidth="2"/>
          <circle cx="180" cy="15" r="8" fill="none" stroke="#4B5563" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      type: 'Combined Curves',
      svg: (
        <svg viewBox="0 0 200 50" className="w-full h-12">
          <path d="M 20 25 Q 60 10 100 25 Q 140 40 180 25" fill="none" stroke="#4B5563" strokeWidth="3"/>
          <circle cx="20" cy="25" r="8" fill="none" stroke="#4B5563" strokeWidth="2"/>
          <circle cx="180" cy="25" r="8" fill="none" stroke="#4B5563" strokeWidth="2"/>
        </svg>
      )
    }
  ]

  // Technical parameters table data
  const parameterTable = {
    headers: ['Belt Width (mm)', '500', '650', '800', '1000', '1200', '1400', '1600', '1800', '2000', '2200', '2400'],
    speeds: ['0.8', '1.0', '1.25', '1.6', '2.0', '2.5', '3.15', '4.0', '4.5', '5.0', '5.5', '6.5'],
    data: [
      { angle: 100, width: 500, values: [69, 87, 108, 139, 174, 217, '-', '-', '-', '-', '-', '-'] },
      { angle: 150, width: 650, values: [127, 159, 254, 139, 318, 397, '-', '-', '-', '-', '-', '-'] },
      { angle: 200, width: 800, values: [198, 248, 310, 397, 496, 620, 781, '-', '-', '-', '-', '-'] },
      { angle: 300, width: 1000, values: [324, 405, 507, 649, 811, 101, 1278, 162, '-', '-', '-', '-'] },
      { angle: 350, width: 1200, values: ['-', 593, 742, 951, 1188, 148, 1872, 237, 2674, 297, '-', '-'] },
      { angle: 350, width: 1400, values: ['-', 825, 103, 1321, 165, 206, 2602, 330, 3718, 413, '-', '-'] },
      { angle: 350, width: 1600, values: ['-', '-', '-', '-', 2186, 273, 3444, 437, 4920, 546, 6122, '-'] },
      { angle: 350, width: 1800, values: ['-', '-', '-', '-', 2795, 349, 4403, 559, 6291, 698, 7829, 908] },
      { angle: 350, width: 2000, values: ['-', '-', '-', '-', 3470, 433, 5466, 694, 7808, 867, 9717, 11277] },
      { angle: 350, width: 2200, values: ['-', '-', '-', '-', '-', '-', 6843, 869, 9776, 10863, 1216, 14120] },
      { angle: 350, width: 2400, values: ['-', '-', '-', '-', '-', '-', 8289, 1052, 11842, 13158, 1473, 17104] }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Full Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            // src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop"
            src = '/images/products/belt_conveyor/belt_conveyor_head.jpg'
            alt="Belt Conveyor System Background"
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full">
          {/* Dark overlay for text area */}
          {/* <div className="bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-transparent"> */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
              <div className="max-w-3xl">
                <div className="mb-6">
                  <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    DT II / DT II (A) Series
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Belt Conveyor Systems
                </h1>
                
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Universal fixed belt conveyor based on TD75 and DTII/DTII(A) series, serving as domestically standardized general-purpose product line
                </p>

                {/* Key metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8 max-w-xl">
                  {keySpecs.slice(0, 2).map((spec, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">{spec.icon}</span>
                        <span className="text-sm text-gray-300">{spec.label}</span>
                      </div>
                      <p className="text-lg font-bold text-white">{spec.value}</p>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors group">
                    Get Quote
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/products" className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-300">
                    View All Products
                  </Link>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Application Industries - Light Gray Background */}
      <section className="py-20 bg-gray-50 animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Diverse Scenarios
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-3 hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <span className="text-3xl">{industry.icon}</span>
                </div>
                <p className="text-sm font-medium text-gray-700">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Project Showcase Section */}
      <section className="py-24 bg-white animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Real-World Applications
          </h2>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative h-[500px]">
                <img
                  src={projectScenarios[activeScenario].image}
                  alt={projectScenarios[activeScenario].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-4">{projectScenarios[activeScenario].title}</h3>
                  <p className="text-lg mb-4">{projectScenarios[activeScenario].description}</p>
                  <div className="flex gap-8">
                    <div>
                      <span className="text-orange-400 font-bold">Capacity:</span> {projectScenarios[activeScenario].capacity}
                    </div>
                    <div>
                      <span className="text-orange-400 font-bold">Length:</span> {projectScenarios[activeScenario].length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Scenario selector */}
            <div className="flex justify-center mt-6 gap-3">
              {projectScenarios.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveScenario(index)}
                  className={`w-12 h-2 rounded-full transition-all duration-300 ${
                    activeScenario === index ? 'bg-blue-600 w-16' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features - White Background */}
      <section className="py-20 bg-gray-50 animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Technical Parameters</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The DTII(A) fixed belt conveyor is an updated iteration of the original TD75 and DX series
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 inline-flex">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'overview' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'specs' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Technical Parameters
              </button>
              <button
                onClick={() => setActiveTab('layout')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'layout' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Layout
              </button>
            </div>
          </div>

          {/* Tab content */}
          <div className="max-w-6xl mx-auto">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Standardized Design</h3>
                  <p className="text-gray-600">Complies with national standards, universal components</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">High Performance</h3>
                  <p className="text-gray-600">Strong conveying capacity, stable operation, low energy</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Modular System</h3>
                  <p className="text-gray-600">Flexible configuration, quick adjustment and expansion</p>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="px-4 py-3 text-left text-sm font-semibold" rowSpan={2}>
                        Max lumpiness (mm)
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold" rowSpan={2}>
                        Belt Width (mm)
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-semibold" colSpan={12}>
                        Belt Speed (m/s) / Conveying Capacity (t/h)
                      </th>
                    </tr>
                    <tr className="bg-blue-500 text-white">
                      {parameterTable.speeds.map((speed, index) => (
                        <th key={index} className="px-3 py-2 text-center text-xs">
                          {speed}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {parameterTable.data.map((row, rowIndex) => (
                      <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.angle}</td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.width}</td>
                        {row.values.map((value, index) => (
                          <td key={index} className="px-3 py-3 text-sm text-center text-gray-700">
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'layout' && (
              <div>
                <p className="text-gray-600 text-center mb-8">
                  Can be arranged in different forms according to engineering needs
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {layouts.map((layout, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                      <div className="h-20 mb-4 flex items-center justify-center">
                        {layout.svg}
                      </div>
                      <p className="font-medium text-gray-900">{layout.type}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section - Navy Blue Background */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 animate-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Customized Solutions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our technical team will provide the most suitable conveyor system design for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
              Contact Us
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/products" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center">
              View More Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .animate-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .animate-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}
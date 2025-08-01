'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ChevronRight, ArrowRight } from 'lucide-react'

export default function LargeAngleConveyorPage() {
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
    { label: 'Inclination Angle', value: '30°-90°', icon: '📐' },
    { label: 'Belt Width', value: '400-1600mm', icon: '📏' },
    { label: 'Belt Speed', value: '0.8-2.5 m/s', icon: '🚀' },
    { label: 'Sidewall Height', value: '60-400mm', icon: '📊' }
  ]

  // Advantages
  const advantages = [
    { 
      title: 'Large Allowable Inclination',
      description: 'Capable of conveying at angles from 30° to 90° vertical',
      icon: '⛰️'
    },
    { 
      title: 'Compact Structure',
      description: 'Space-saving design with minimal footprint requirements',
      icon: '🏗️'
    },
    { 
      title: 'Small Footprint',
      description: 'Reduces land usage and civil engineering requirements',
      icon: '📦'
    },
    { 
      title: 'Cost Effective',
      description: 'Reduces equipment quantity and civil engineering costs',
      icon: '💰'
    },
    { 
      title: 'Smooth Operation',
      description: 'Stable material transport with minimal spillage',
      icon: '⚙️'
    },
    { 
      title: 'Low Noise & Energy',
      description: 'Quiet operation with low energy consumption',
      icon: '🔇'
    }
  ]

  // Real project scenarios
  const projectScenarios = [
    {
      title: 'Metro Tunnel in Guangdong, China',
      // image: 'https://images.unsplash.com/photo-1547751550-b62e1c2e4355?w=800&h=600&fit=crop',
      image: '/images/products/DJ_series/DJ_series_case1.jpg',
      capacity: '1,200 m³/h',
      angle: '90°',
      description: 'Vertical lift system for construction stone extraction'
    }
  ]

  // Layout configurations
  const layouts = [
    { 
      type: 'Z-Type',
      description: 'Single angle change',
      svg: (
        <svg viewBox="0 0 200 100" className="w-full h-20">
          <line x1="20" y1="80" x2="80" y2="80" stroke="#4B5563" strokeWidth="3"/>
          <line x1="80" y1="80" x2="120" y2="20" stroke="#4B5563" strokeWidth="3"/>
          <line x1="120" y1="20" x2="180" y2="20" stroke="#4B5563" strokeWidth="3"/>
          <circle cx="20" cy="80" r="6" fill="none" stroke="#4B5563" strokeWidth="2"/>
          <circle cx="180" cy="20" r="6" fill="none" stroke="#4B5563" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      type: 'L-Type',
      description: 'Right angle configuration',
      svg: (
        <svg viewBox="0 0 200 100" className="w-full h-20">
          <line x1="20" y1="80" x2="100" y2="80" stroke="#4B5563" strokeWidth="3"/>
          <line x1="100" y1="80" x2="100" y2="20" stroke="#4B5563" strokeWidth="3"/>
          <circle cx="20" cy="80" r="6" fill="none" stroke="#4B5563" strokeWidth="2"/>
          <circle cx="100" cy="20" r="6" fill="none" stroke="#4B5563" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      type: 'N-Type',
      description: 'Multiple angle changes',
      svg: (
        <svg viewBox="0 0 200 100" className="w-full h-20">
          <line x1="20" y1="80" x2="60" y2="80" stroke="#4B5563" strokeWidth="3"/>
          <line x1="60" y1="80" x2="100" y2="20" stroke="#4B5563" strokeWidth="3"/>
          <line x1="100" y1="20" x2="140" y2="20" stroke="#4B5563" strokeWidth="3"/>
          <line x1="140" y1="20" x2="180" y2="80" stroke="#4B5563" strokeWidth="3"/>
          <circle cx="20" cy="80" r="6" fill="none" stroke="#4B5563" strokeWidth="2"/>
          <circle cx="180" cy="80" r="6" fill="none" stroke="#4B5563" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      type: 'Combined Curves',
      description: 'Complex routing with curves',
      svg: (
        <svg viewBox="0 0 200 100" className="w-full h-20">
          <path d="M 20 80 L 60 80 Q 100 80 100 40 L 100 20" fill="none" stroke="#4B5563" strokeWidth="3"/>
          <line x1="100" y1="20" x2="140" y2="20" stroke="#4B5563" strokeWidth="3"/>
          <path d="M 140 20 Q 180 20 180 60 L 180 80" fill="none" stroke="#4B5563" strokeWidth="3"/>
          <circle cx="20" cy="80" r="6" fill="none" stroke="#4B5563" strokeWidth="2"/>
          <circle cx="180" cy="80" r="6" fill="none" stroke="#4B5563" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      type: 'Vertical (90°)',
      description: 'Pure vertical lifting',
      svg: (
        <svg viewBox="0 0 200 100" className="w-full h-20">
          <path d="M 100 80 Q 90 80 90 70 L 90 30 Q 90 20 100 20" fill="none" stroke="#4B5563" strokeWidth="3"/>
          <path d="M 100 80 Q 110 80 110 70 L 110 30 Q 110 20 100 20" fill="none" stroke="#4B5563" strokeWidth="3"/>
          <circle cx="100" cy="80" r="6" fill="none" stroke="#4B5563" strokeWidth="2"/>
          <circle cx="100" cy="20" r="6" fill="none" stroke="#4B5563" strokeWidth="2"/>
        </svg>
      )
    }
  ]

  // Technical parameters - Sample data for 30° angle at 1 m/s
  const technicalParams30 = {
    angle: '30°',
    headers: ['Belt Width (mm)', 'Sidewall Height (mm)', '30°', '35°', '40°', '45°', '50°', '55°', '60°', '65°', '70°', '75°', '80°', '85°', '90°'],
    data: [
      { width: '400', sidewall: '60', values: ['17', '15', '13', '12', '11', '10', '9', '8', '7', '6', '-', '5', '4'] },
      { width: '400', sidewall: '80', values: ['30', '28', '25', '22', '20', '18', '16', '15', '13', '12', '11', '9', '8'] },
      { width: '400', sidewall: '100', values: ['40', '37', '35', '32', '29', '26', '23', '21', '19', '17', '15', '13', '11'] },
      { width: '500', sidewall: '80', values: ['42', '38', '36', '31', '28', '25', '22', '20', '18', '16', '15', '13', '11'] },
      { width: '500', sidewall: '100', values: ['56', '52', '48', '44', '40', '36', '32', '29', '26', '24', '21', '19', '16'] },
      { width: '500', sidewall: '120', values: ['49', '44', '39', '34', '31', '28', '25', '23', '20', '-', '-', '-', '-'] },
      { width: '650', sidewall: '100', values: ['78', '73', '67', '61', '56', '50', '45', '41', '37', '33', '30', '26', '23'] },
      { width: '650', sidewall: '120', values: ['70', '61', '54', '48', '43', '39', '35', '32', '29', '-', '-', '-', '-'] },
      { width: '650', sidewall: '160', values: ['93', '84', '75', '67', '60', '54', '49', '44', '40', '36', '32', '28', '25'] },
      { width: '800', sidewall: '120', values: ['93', '80', '71', '63', '56', '51', '46', '42', '38', '-', '-', '-', '-'] },
      { width: '800', sidewall: '160', values: ['127', '115', '103', '91', '82', '74', '67', '60', '54', '49', '44', '38', '34'] },
      { width: '800', sidewall: '200', values: ['144', '126', '111', '99', '89', '80', '72', '65', '60', '53', '47', '42', '36'] },
      { width: '1000', sidewall: '160', values: ['171', '154', '138', '122', '110', '99', '90', '81', '73', '66', '59', '52', '46'] },
      { width: '1000', sidewall: '200', values: ['193', '164', '149', '133', '119', '108', '98', '88', '79', '71', '64', '56', '48'] },
      { width: '1000', sidewall: '240', values: ['242', '221', '200', '180', '162', '144', '127', '111', '-', '-', '-', '-', '-'] },
      { width: '1200', sidewall: '160', values: ['241', '193', '173', '154', '138', '124', '112', '102', '92', '82', '73', '65', '57'] },
      { width: '1200', sidewall: '200', values: ['243', '212', '188', '167', '150', '135', '122', '111', '100', '90', '80', '70', '61'] },
      { width: '1200', sidewall: '240', values: ['303', '278', '251', '226', '203', '181', '160', '136', '-', '-', '-', '-', '-'] },
      { width: '1400', sidewall: '240', values: ['365', '339', '302', '272', '245', '218', '192', '167', '-', '-', '-', '-', '-'] },
      { width: '1400', sidewall: '300', values: ['526', '495', '463', '431', '397', '361', '326', '295', '266', '239', '213', '188', '163'] },
      { width: '1600', sidewall: '240', values: ['427', '390', '353', '318', '286', '255', '225', '195', '-', '-', '-', '-', '-'] },
      { width: '1600', sidewall: '300', values: ['620', '584', '546', '508', '468', '426', '385', '348', '314', '282', '251', '222', '192'] },
      { width: '1600', sidewall: '400', values: ['891', '846', '799', '751', '701', '648', '590', '533', '481', '432', '385', '340', '295'] }
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
            src="/images/products/DJ_series/DJ_series.jpg"
            alt="Large Angle Conveyor System Background"
            className="w-full h-full object-cover"
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
                    DJ Series Large-Angle Conveyor
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Large-Angle Corrugated Sidewall Belt Conveyor
                </h1>
                
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Superior performance conveyor system designed for steep incline material transport. 
                  Ideal replacement for chain conveyors and bucket elevators with angles up to 90°.
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

      {/* Key Advantages - With Background Image */}
      <section className="relative py-20 animate-section overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&h=800&fit=crop"
            alt="Industrial Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/90 via-gray-50/95 to-gray-50/90"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">{advantage.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Applications Section */}
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
                      <span className="text-orange-400 font-bold">Angle:</span> {projectScenarios[activeScenario].angle}
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

      {/* Technical Information - Gray Background */}
      <section className="py-20 bg-gray-50 animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Information</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive technical specifications for large-angle corrugated sidewall belt conveyor systems
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
                Layout Forms
              </button>
            </div>
          </div>

          {/* Tab content */}
          <div className="max-w-6xl mx-auto">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Design Features</h3>
                  <p className="text-gray-600 mb-4">
                    The DJ Series conveyor combines corrugated sidewalls and transverse cleats to enable 
                    material transport at steep angles from 30° to 90° vertical. This innovative design 
                    eliminates material rollback and spillage.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Corrugated sidewalls prevent material spillage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Transverse cleats hold material during steep incline</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Flexible routing adapts to space constraints</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Applications</h3>
                  <p className="text-gray-600 mb-4">
                    Widely used across industries requiring vertical or steep angle material transport,
                    particularly in space-constrained environments.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Mining and mineral processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Ports and terminal operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Construction materials handling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Chemical and fertilizer industries</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div>
                <div className="mb-4 text-center">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Conveying Capacity at Belt Speed of 1 m/s (Inclination: {technicalParams30.angle})
                  </h4>
                </div>
                <div className="overflow-x-auto shadow-lg rounded-lg">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-3 py-3 text-left text-xs font-semibold whitespace-nowrap border-r border-blue-500" rowSpan={2}>
                          Belt Width<br/>(mm)
                        </th>
                        <th className="px-3 py-3 text-left text-xs font-semibold whitespace-nowrap" rowSpan={2}>
                          Sidewall Height<br/>(mm)
                        </th>
                        <th className="px-3 py-3 text-center text-xs font-semibold" colSpan={13}>
                          Inclination Angle / Conveying Capacity (m³/h)
                        </th>
                      </tr>
                      <tr className="bg-blue-500 text-white">
                        {technicalParams30.headers.slice(2).map((angle, index) => (
                          <th key={index} className="px-3 py-2 text-center text-xs font-medium">
                            {angle}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {technicalParams30.data.map((row, rowIndex) => {
                        const prevRow = rowIndex > 0 ? technicalParams30.data[rowIndex - 1] : null;
                        const showDivider = prevRow && prevRow.width !== row.width;
                        
                        return (
                          <React.Fragment key={rowIndex}>
                            {showDivider && (
                              <tr>
                                <td colSpan={15} className="bg-gray-300 h-0.5"></td>
                              </tr>
                            )}
                            <tr className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                              <td className="px-3 py-2 text-xs font-medium text-gray-900 border-r border-gray-200">
                                {(!prevRow || prevRow.width !== row.width) ? row.width : ''}
                              </td>
                              <td className="px-3 py-2 text-xs text-gray-700">{row.sidewall}</td>
                              {row.values.map((value, index) => (
                                <td key={index} className="px-3 py-2 text-xs text-center text-gray-700">
                                  {value}
                                </td>
                              ))}
                            </tr>
                          </React.Fragment>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-gray-600 text-center">
                  * Conveying capacity unit: m³/h (cubic meters per hour)<br/>
                  * "-" indicates that this configuration is not recommended<br/>
                  * For other belt speeds (0.8-2.5 m/s), capacity values should be adjusted proportionally
                </p>
              </div>
            )}

            {activeTab === 'layout' && (
              <div>
                <p className="text-gray-600 text-center mb-8">
                  Flexible layout configurations to adapt to various site conditions and requirements
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {layouts.map((layout, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="h-24 mb-4 flex items-center justify-center">
                        {layout.svg}
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{layout.type}</h4>
                      <p className="text-sm text-gray-600">{layout.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Layout Flexibility</h4>
                  <p className="text-gray-600">
                    The DJ Series conveyor can be configured in various layouts to overcome spatial 
                    constraints and optimize material flow. From simple inclined sections to complex 
                    multi-angle routing, the system adapts to your facility's unique requirements while 
                    maintaining efficient material transport.
                  </p>
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
            Need Steep Angle Material Handling?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our DJ Series conveyors provide efficient vertical transport solutions for your facility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
              Request Technical Consultation
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/products" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center">
              Browse All Solutions
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
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ChevronRight, ArrowRight } from 'lucide-react'

export default function BucketElevatorsPage() {
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
    { label: 'Bucket Width', value: '160-1600mm', icon: '🪣' },
    { label: 'Lift Height', value: 'Up to 80m', icon: '📏' },
    { label: 'Capacity', value: 'Max 1,800 m³/h', icon: '⚡' },
    { label: 'Fill Rate', value: '75-100%', icon: '📊' }
  ]

  // Key Advantages
  const advantages = [
    { 
      title: 'High Capacity',
      description: 'Large volume transport with optimized bucket design',
      icon: '💪'
    },
    { 
      title: 'High Lift Height',
      description: 'Capable of vertical lifting up to 80 meters',
      icon: '🏗️'
    },
    { 
      title: 'Compact Structure',
      description: 'Space-saving design with minimal footprint',
      icon: '📦'
    },
    { 
      title: 'Smooth Operation',
      description: 'Flexible drive with hydraulic coupling for stable performance',
      icon: '⚙️'
    },
    { 
      title: 'Long Service Life',
      description: 'Durable components with low maintenance requirements',
      icon: '🔧'
    },
    { 
      title: 'Intelligent Control',
      description: 'Advanced monitoring and control systems for optimal performance',
      icon: '🖥️'
    }
  ]

  // Real project scenarios
  const projectScenarios = [
    {
      title: 'Cement Plant in Thailand',
      image: '/images/products/TDG_THG/Bucket_elevator.jpg',
      capacity: '1,200 m³/h',
      height: '65m',
      description: 'High-capacity clinker handling system'
    }
  ]

  // Discharge methods
  const dischargeMethods = [
    {
      type: 'Mixed Discharge',
      description: 'Combination of centrifugal and gravity discharge',
      icon: '🔄'
    },
    {
      type: 'Gravity Discharge',
      description: 'Natural gravity-based material discharge',
      icon: '⬇️'
    },
    {
      type: 'Scraper Discharge',
      description: 'Mechanical scraper for complete bucket emptying',
      icon: '🔨'
    }
  ]

  // Technical parameters table data
  const technicalParams = [
    {
      model: 'TDG160',
      width: '160',
      bucketArea: { ad: '2.6', bd: '1.9', ah: '2.6', bh: '1.9' },
      capacity100: { ad: '45', bd: '32', ah: '30', bh: '21' },
      capacity75: { ad: '34', bd: '24', ah: '23', bh: '16' },
      maxHeight: { ad: '70', bd: '80', ah: '60', bh: '75' }
    },
    {
      model: 'TDG200',
      width: '200',
      bucketArea: { ad: '4.1', bd: '2.9', ah: '4.1', bh: '2.9' },
      capacity100: { ad: '60', bd: '42', ah: '47', bh: '33' },
      capacity75: { ad: '45', bd: '32', ah: '35', bh: '25' },
      maxHeight: { ad: '70', bd: '80', ah: '60', bh: '75' }
    },
    {
      model: 'TDG250',
      width: '250',
      bucketArea: { ad: '6.5', bd: '4.6', ah: '6.5', bh: '4.6' },
      capacity100: { ad: '95', bd: '70', ah: '65', bh: '45' },
      capacity75: { ad: '71', bd: '53', ah: '49', bh: '34' },
      maxHeight: { ad: '70', bd: '80', ah: '60', bh: '75' }
    },
    {
      model: 'TDG315',
      width: '315',
      bucketArea: { ad: '10', bd: '7.4', ah: '10', bh: '7.4' },
      capacity100: { ad: '135', bd: '100', ah: '100', bh: '75' },
      capacity75: { ad: '101', bd: '75', ah: '75', bh: '56' },
      maxHeight: { ad: '70', bd: '80', ah: '60', bh: '75' }
    },
    {
      model: 'TDG400',
      width: '400',
      bucketArea: { ad: '16', bd: '12', ah: '16', bh: '12' },
      capacity100: { ad: '210', bd: '155', ah: '145', bh: '110' },
      capacity75: { ad: '158', bd: '116', ah: '110', bh: '82' },
      maxHeight: { ad: '70', bd: '80', ah: '60', bh: '75' }
    },
    {
      model: 'TDG500',
      width: '500',
      bucketArea: { ad: '25', bd: '19', ah: '25', bh: '19' },
      capacity100: { ad: '290', bd: '220', ah: '205', bh: '155' },
      capacity75: { ad: '218', bd: '165', ah: '154', bh: '116' },
      maxHeight: { ad: '70', bd: '80', ah: '60', bh: '75' }
    },
    {
      model: 'TDG630',
      width: '630',
      bucketArea: { ad: '40', bd: '29', ah: '40', bh: '29' },
      capacity100: { ad: '460', bd: '335', ah: '350', bh: '255' },
      capacity75: { ad: '345', bd: '251', ah: '262', bh: '190' },
      maxHeight: { ad: '70', bd: '80', ah: '60', bh: '75' }
    },
    {
      model: 'TDG800',
      width: '800',
      bucketArea: { ad: '61', bd: '47', ah: '64', bh: '47' },
      capacity100: { ad: '655', bd: '480', ah: '475', bh: '345' },
      capacity75: { ad: '491', bd: '360', ah: '356', bh: '259' },
      maxHeight: { ad: '70', bd: '80', ah: '55', bh: '70' }
    },
    {
      model: 'TDG1000',
      width: '1000',
      bucketArea: { ad: '102', bd: '74', ah: '102', bh: '74' },
      capacity100: { ad: '1050', bd: '760', ah: '720', bh: '520' },
      capacity75: { ad: '788', bd: '570', ah: '540', bh: '390' },
      maxHeight: { ad: '70', bd: '80', ah: '55', bh: '70' }
    },
    {
      model: 'TDG1250',
      width: '1250',
      bucketArea: { ad: '161', bd: '117', ah: '161', bh: '117' },
      capacity100: { ad: '1500', bd: '1090', ah: '1135', bh: '825' },
      capacity75: { ad: '1125', bd: '818', ah: '851', bh: '618' },
      maxHeight: { ad: '70', bd: '80', ah: '40', bh: '55' }
    },
    {
      model: 'TDG1600',
      width: '1600',
      bucketArea: { ad: '255', bd: '184', ah: '255', bh: '184' },
      capacity100: { ad: '2080', bd: '1500', ah: '1800', bh: '1300' },
      capacity75: { ad: '1560', bd: '1125', ah: '1350', bh: '975' },
      maxHeight: { ad: '70', bd: '80', ah: '40', bh: '55' }
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Full Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/products/bucket_elevator.jpg"
            alt="Bucket Elevator System Background"
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
                    TDG/THG Series
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Bucket Elevator Systems
                </h1>
                
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Advanced vertical conveying systems upgraded from DT and TH series. Ideal for cement, coal, sand and gravel, 
                  chemicals, and grain industries with lifting heights up to 80 meters.
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
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=800&fit=crop"
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
                      <span className="text-orange-400 font-bold">Height:</span> {projectScenarios[activeScenario].height}
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
              Comprehensive technical specifications for TDG and THG bucket elevator systems
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
                onClick={() => setActiveTab('discharge')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'discharge' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Discharge Methods
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
                    The TDG and THG bucket elevators feature a vertical-shaft gearbox and hydraulic coupling, 
                    resulting in a compact structure with smooth operation and flexible power transmission that 
                    protects the motor, gearbox, and drive components.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Level sensor and speed controller integrated at tail section</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Central control room monitoring capability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Real-time elevator operational status monitoring</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Structural Benefits</h3>
                  <p className="text-gray-600 mb-4">
                    The head, middle, and tail casings are fully enclosed to prevent material spillage and 
                    dust emission, reducing environmental pollution. The modular design allows for easy 
                    maintenance and component replacement.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Fully enclosed design prevents contamination</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Modular construction for easy assembly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Reduced noise levels during operation</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="overflow-x-auto">
                <div className="mb-4">
                  <p className="text-sm text-gray-600 text-center">
                    Main parameters for TDG/THG bucket elevator series
                  </p>
                </div>
                <div className="overflow-x-auto shadow-lg rounded-lg">
                  <table className="min-w-full bg-white text-xs">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-2 py-2 text-left font-semibold border-r" rowSpan={2}>Bucket Width<br/>(mm)</th>
                        <th className="px-2 py-1 text-center font-semibold bg-orange-100" colSpan={4}>ad Type</th>
                        <th className="px-2 py-1 text-center font-semibold bg-blue-100" colSpan={4}>bd Type</th>
                        <th className="px-2 py-1 text-center font-semibold bg-green-100" colSpan={4}>ah Type</th>
                        <th className="px-2 py-1 text-center font-semibold bg-purple-100" colSpan={4}>bh Type</th>
                      </tr>
                      <tr className="bg-gray-50">
                        {/* ad Type */}
                        <th className="px-1 py-1 text-center border-r bg-orange-50">Bucket<br/>Area<br/>(L)</th>
                        <th className="px-1 py-1 text-center bg-orange-50">Capacity<br/>Ψ=100%<br/>(m³/h)</th>
                        <th className="px-1 py-1 text-center bg-orange-50">Capacity<br/>Ψ=75%<br/>(m³/h)</th>
                        <th className="px-1 py-1 text-center border-r bg-orange-50">Max Lift<br/>Height<br/>(m)</th>
                        {/* bd Type */}
                        <th className="px-1 py-1 text-center border-r bg-blue-50">Bucket<br/>Area<br/>(L)</th>
                        <th className="px-1 py-1 text-center bg-blue-50">Capacity<br/>Ψ=100%<br/>(m³/h)</th>
                        <th className="px-1 py-1 text-center bg-blue-50">Capacity<br/>Ψ=75%<br/>(m³/h)</th>
                        <th className="px-1 py-1 text-center border-r bg-blue-50">Max Lift<br/>Height<br/>(m)</th>
                        {/* ah Type */}
                        <th className="px-1 py-1 text-center border-r bg-green-50">Bucket<br/>Area<br/>(L)</th>
                        <th className="px-1 py-1 text-center bg-green-50">Capacity<br/>Ψ=100%<br/>(m³/h)</th>
                        <th className="px-1 py-1 text-center bg-green-50">Capacity<br/>Ψ=75%<br/>(m³/h)</th>
                        <th className="px-1 py-1 text-center border-r bg-green-50">Max Lift<br/>Height<br/>(m)</th>
                        {/* bh Type */}
                        <th className="px-1 py-1 text-center border-r bg-purple-50">Bucket<br/>Area<br/>(L)</th>
                        <th className="px-1 py-1 text-center bg-purple-50">Capacity<br/>Ψ=100%<br/>(m³/h)</th>
                        <th className="px-1 py-1 text-center bg-purple-50">Capacity<br/>Ψ=75%<br/>(m³/h)</th>
                        <th className="px-1 py-1 text-center bg-purple-50">Max Lift<br/>Height<br/>(m)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {technicalParams.map((row, rowIndex) => (
                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-2 py-2 font-medium text-gray-900 border-r">{row.width}</td>
                          {/* ad Type */}
                          <td className="px-1 py-2 text-center text-gray-700 border-r">{row.bucketArea.ad}</td>
                          <td className="px-1 py-2 text-center text-gray-700">{row.capacity100.ad}</td>
                          <td className="px-1 py-2 text-center text-gray-700">{row.capacity75.ad}</td>
                          <td className="px-1 py-2 text-center text-gray-700 border-r">▸ {row.maxHeight.ad}</td>
                          {/* bd Type */}
                          <td className="px-1 py-2 text-center text-gray-700 border-r">{row.bucketArea.bd}</td>
                          <td className="px-1 py-2 text-center text-gray-700">{row.capacity100.bd}</td>
                          <td className="px-1 py-2 text-center text-gray-700">{row.capacity75.bd}</td>
                          <td className="px-1 py-2 text-center text-gray-700 border-r">▸ {row.maxHeight.bd}</td>
                          {/* ah Type */}
                          <td className="px-1 py-2 text-center text-gray-700 border-r">{row.bucketArea.ah}</td>
                          <td className="px-1 py-2 text-center text-gray-700">{row.capacity100.ah}</td>
                          <td className="px-1 py-2 text-center text-gray-700">{row.capacity75.ah}</td>
                          <td className="px-1 py-2 text-center text-gray-700 border-r">▸ {row.maxHeight.ah}</td>
                          {/* bh Type */}
                          <td className="px-1 py-2 text-center text-gray-700 border-r">{row.bucketArea.bh}</td>
                          <td className="px-1 py-2 text-center text-gray-700">{row.capacity100.bh}</td>
                          <td className="px-1 py-2 text-center text-gray-700">{row.capacity75.bh}</td>
                          <td className="px-1 py-2 text-center text-gray-700">▸ {row.maxHeight.bh}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-sm text-gray-600 text-center">
                  <p>* Ψ=100% : Bucket completely filled with material</p>
                  <p>* Ψ=75% : Material fill height reaches 3/4 of bucket depth</p>
                </div>
              </div>
            )}

            {activeTab === 'discharge' && (
              <div>
                <p className="text-gray-600 text-center mb-8">
                  Three discharge methods available to suit different material characteristics
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {dischargeMethods.map((method, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">{method.icon}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">{method.type}</h4>
                      <p className="text-gray-600 text-center">{method.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-12 bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Discharge Selection Guide</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Mixed Discharge:</strong> Suitable for powdery and small granular materials with good fluidity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Gravity Discharge:</strong> Ideal for large granular and abrasive materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Scraper Discharge:</strong> Best for sticky and poor-flowing materials</span>
                    </li>
                  </ul>
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
            Need Vertical Material Handling Solutions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our bucket elevator systems provide efficient vertical transport for various bulk materials
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
              Get Technical Support
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/products" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center">
              View Other Equipment
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
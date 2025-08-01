'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ChevronRight, ArrowRight } from 'lucide-react'

export default function LongDistanceConveyorPage() {
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
    { label: 'Distance', value: '1-30+ km', icon: '📏' },
    { label: 'Capacity', value: 'Up to 10,000 t/h', icon: '⚡' },
    { label: 'Turning Radius', value: '17-20°', icon: '🚀' },
    { label: 'CO₂ Reduction', value: '49.3%', icon: '🌱' }
  ]



  // Real project scenarios

  const projectScenarios = [
    {
      title: 'Mining Overland System',
      image: 'https://images.unsplash.com/photo-1548695607-9c73430ba065?w=800&h=600&fit=crop',
      capacity: '8,000 t/h',
      length: '12 km',
      description: 'Cross-country transport with minimal infrastructure'
    },
    {
      title: 'Port to Plant Connection',
      image: 'https://images.unsplash.com/photo-1590496793907-a5d654c0e882?w=800&h=600&fit=crop',
      capacity: '5,000 t/h',
      length: '8.5 km',
      description: 'Efficient material transport from port to processing facility'
    },
    {
      title: 'Mountain Terrain Project',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      capacity: '3,600 t/h',
      length: '15 km',
      description: 'Following natural terrain with curved sections'
    }
  ]

  // Layout types with SVG representations
  const layoutTypes = [
    { 
      type: 'Straight',
      svg: (
        <svg viewBox="0 0 200 50" className="w-full h-12">
          <line x1="20" y1="25" x2="180" y2="25" stroke="#4B5563" strokeWidth="3"/>
          <circle cx="20" cy="25" r="8" fill="none" stroke="#4B5563" strokeWidth="2"/>
          <circle cx="180" cy="25" r="8" fill="none" stroke="#4B5563" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      type: 'Single Curve',
      svg: (
        <svg viewBox="0 0 200 50" className="w-full h-12">
          <path d="M 20 25 Q 100 10 180 25" fill="none" stroke="#4B5563" strokeWidth="3"/>
          <circle cx="20" cy="25" r="8" fill="none" stroke="#4B5563" strokeWidth="2"/>
          <circle cx="180" cy="25" r="8" fill="none" stroke="#4B5563" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      type: 'S-Curve',
      svg: (
        <svg viewBox="0 0 200 50" className="w-full h-12">
          <path d="M 20 35 Q 60 20 100 25 Q 140 30 180 15" fill="none" stroke="#4B5563" strokeWidth="3"/>
          <circle cx="20" cy="35" r="8" fill="none" stroke="#4B5563" strokeWidth="2"/>
          <circle cx="180" cy="15" r="8" fill="none" stroke="#4B5563" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      type: 'Multiple Curves',
      svg: (
        <svg viewBox="0 0 200 50" className="w-full h-12">
          <path d="M 20 25 Q 50 10 80 25 Q 110 40 140 25 Q 170 10 180 25" fill="none" stroke="#4B5563" strokeWidth="3"/>
          <circle cx="20" cy="25" r="8" fill="none" stroke="#4B5563" strokeWidth="2"/>
          <circle cx="180" cy="25" r="8" fill="none" stroke="#4B5563" strokeWidth="2"/>
        </svg>
      )
    }
  ]

  // Belt configurations
  const beltConfigurations = [
    { name: 'Standard Trough', type: 'standard' },
    { name: 'Deep Trough', type: 'deep' },
    { name: 'Pipe Conveyor', type: 'pipe' },
    { name: 'U-Type Conveyor', type: 'u-type' },
    { name: 'Curved Conveyor', type: 'curved' },
    { name: 'Flat Belt', type: 'flat' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Full Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=1920&h=1080&fit=crop"
            alt="Long Distance Conveyor System Background"
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
                    Overland Belt Conveyor Systems
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Long Distance Horizontal Curved Belt Conveyors
                </h1>
                
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  More efficient investment, greener projects. Using long-distance overland belt conveyor systems as an intelligent alternative to truck transport, we offer single conveyor systems from 1-30km utilizing the latest DLM curved conveyor technology.
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



      {/* Enhanced Comparison Section with Visual Data */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-green-50 animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Belt Conveyor vs Truck Transport</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive comparison based on 6km transport distance
            </p>
          </div>

          {/* Main Comparison Visual */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Belt Conveyor Side */}
              <div className="relative">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-4">
                    <span className="text-5xl">🏗️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Belt Conveyor</h3>
                  <p className="text-gray-600">Environmentally Friendly Solution</p>
                </div>
                
                <div className="space-y-6">
                  {/* Construction Cost */}
                  <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                    <p className="text-sm text-gray-600 mb-2">Construction Cost</p>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold text-green-600">0.183</span>
                      <span className="text-lg text-gray-600 mb-1">Billion ¥</span>
                    </div>
                    <div className="mt-3 bg-green-200 h-2 rounded-full">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '9.6%' }}></div>
                    </div>
                  </div>
                  
                  {/* Operating Cost */}
                  <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                    <p className="text-sm text-gray-600 mb-2">Operating Cost</p>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold text-green-600">0.69</span>
                      <span className="text-lg text-gray-600 mb-1">¥/ton</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-green-700">Most cost-effective</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Truck Transport Side */}
              <div className="relative">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-4">
                    <span className="text-5xl">🚚</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Truck Transport</h3>
                  <p className="text-gray-600">Traditional Method</p>
                </div>
                
                <div className="space-y-6">
                  {/* Construction Cost */}
                  <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">Construction Cost</p>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold text-gray-600">1.913</span>
                      <span className="text-lg text-gray-600 mb-1">Billion ¥</span>
                    </div>
                    <div className="mt-3 bg-gray-200 h-2 rounded-full">
                      <div className="bg-gray-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  {/* Operating Cost */}
                  <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">Operating Cost</p>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold text-gray-600">5.7</span>
                      <span className="text-lg text-gray-600 mb-1">¥/ton</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-sm text-red-600">8.3x more expensive</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Comparison Badge */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
              <div className="bg-white rounded-full shadow-xl p-6 border-4 border-green-500">
                <p className="text-2xl font-bold text-green-600">VS</p>
              </div>
            </div>
          </div>

          {/* Environmental Impact Visual Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-lg font-semibold">Operating Energy</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Belt Conveyor</span>
                  <span className="font-bold text-green-600">0.257 kg</span>
                </div>
                <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
                  <div className="absolute h-full bg-green-500" style={{ width: '16.2%' }}></div>
                  <div className="absolute h-full bg-gray-500" style={{ width: '100%', opacity: 0.3 }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Truck</span>
                  <span className="font-bold text-gray-600">1.586 kg</span>
                </div>
                <div className="text-center">
                  <span className="text-sm font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">-84% reduction</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💨</span>
                </div>
                <h4 className="text-lg font-semibold">NOx Emissions</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Belt Conveyor</span>
                  <span className="font-bold text-green-600">0.00696 kg</span>
                </div>
                <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
                  <div className="absolute h-full bg-green-500" style={{ width: '0.6%' }}></div>
                  <div className="absolute h-full bg-gray-500" style={{ width: '100%', opacity: 0.3 }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Truck</span>
                  <span className="font-bold text-gray-600">1.1 kg</span>
                </div>
                <div className="text-center">
                  <span className="text-sm font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">-99.4% reduction</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏭</span>
                </div>
                <h4 className="text-lg font-semibold">CO Emissions</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Belt Conveyor</span>
                  <span className="font-bold text-green-600">0.000375 kg</span>
                </div>
                <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
                  <div className="absolute h-full bg-green-500" style={{ width: '0.02%' }}></div>
                  <div className="absolute h-full bg-gray-500" style={{ width: '100%', opacity: 0.3 }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Truck</span>
                  <span className="font-bold text-gray-600">2.16 kg</span>
                </div>
                <div className="text-center">
                  <span className="text-sm font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">-99.98% reduction</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🧪</span>
                </div>
                <h4 className="text-lg font-semibold">Hydrocarbon</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Belt Conveyor</span>
                  <span className="font-bold text-green-600">0.00148 kg</span>
                </div>
                <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
                  <div className="absolute h-full bg-green-500" style={{ width: '0.4%' }}></div>
                  <div className="absolute h-full bg-gray-500" style={{ width: '100%', opacity: 0.3 }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Truck</span>
                  <span className="font-bold text-gray-600">0.36 kg</span>
                </div>
                <div className="text-center">
                  <span className="text-sm font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">-99.6% reduction</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌍</span>
                </div>
                <h4 className="text-lg font-semibold">CO₂ Emissions</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Belt Conveyor</span>
                  <span className="font-bold text-green-600">2.608 kg</span>
                </div>
                <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
                  <div className="absolute h-full bg-orange-500" style={{ width: '100%' }}></div>
                  <div className="absolute h-full bg-gray-500" style={{ width: '92%', opacity: 0.3 }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Truck</span>
                  <span className="font-bold text-gray-600">2.4 kg</span>
                </div>
                <div className="text-center">
                  <span className="text-sm font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">+8.7% increase</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💨</span>
                </div>
                <h4 className="text-lg font-semibold">Dust Emissions</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Belt Conveyor</span>
                  <span className="font-bold text-green-600">0.00652 kg</span>
                </div>
                <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
                  <div className="absolute h-full bg-green-500" style={{ width: '0.08%' }}></div>
                  <div className="absolute h-full bg-gray-500" style={{ width: '100%', opacity: 0.3 }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Truck</span>
                  <span className="font-bold text-gray-600">8.0 kg</span>
                </div>
                <div className="text-center">
                  <span className="text-sm font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">-99.9% reduction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Box */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Environmental Impact Summary</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Belt conveyors demonstrate superior environmental performance with <strong className="text-green-600">90%+ reduction</strong> in most emissions compared to truck transport. 
              The only slight increase is in CO₂ emissions (+8.7%), while achieving massive reductions in harmful pollutants like NOx, CO, and dust particles.
            </p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Technical Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced overland conveyor technology designed to follow terrain and reduce environmental impact
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
                onClick={() => setActiveTab('advantages')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'advantages' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Advantages
              </button>
              <button
                onClick={() => setActiveTab('configurations')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'configurations' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Configurations
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Terrain Following</h3>
                  <p className="text-gray-600">Follows natural landscape contours, minimizing earthwork</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Energy Efficient</h3>
                  <p className="text-gray-600">Lower power consumption compared to truck transport</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">DLM Technology</h3>
                  <p className="text-gray-600">Advanced curved conveyor design for optimal routing</p>
                </div>
              </div>
            )}

            {activeTab === 'advantages' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Environmental Benefits</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      49.3% reduction in CO2 emissions compared to truck transport
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Minimal ground disturbance following natural terrain
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Reduced noise pollution vs truck traffic
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Economic Benefits</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Lower operational costs than truck fleets
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Reduced infrastructure requirements
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      High reliability with minimal maintenance
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'configurations' && (
              <div>
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Available Layout Types</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {layoutTypes.map((layout, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                        <div className="h-16 mb-3 flex items-center justify-center">
                          {layout.svg}
                        </div>
                        <p className="font-medium text-gray-900">{layout.type}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Belt Configurations</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {beltConfigurations.map((config, index) => (
                      <div key={index} className="bg-gray-100 rounded-lg p-4 text-center">
                        <p className="font-medium text-gray-800">{config.name}</p>
                      </div>
                    ))}
                  </div>
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
            Ready to Reduce Transport Costs?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our long-distance conveyor systems offer the most efficient solution for bulk material transport
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
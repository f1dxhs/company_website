'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ChevronRight, ArrowRight } from 'lucide-react'

export default function TunnelConveyorPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [activeFeature, setActiveFeature] = useState(0)

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
    { label: 'Belt Storage', value: '400-800m', icon: '📦' },
    { label: 'Extension', value: 'Continuous', icon: '🔄' },
    { label: 'Operation', value: 'Non-stop', icon: '⚡' },
    { label: 'Application', value: 'Tunnels', icon: '🚇' }
  ]

  // Key features
  const keyFeatures = [
    {
      title: 'Continuous Operation',
      description: 'Seamless extension without stopping tunnel boring operations',
      benefits: ['No downtime', 'Increased productivity', 'Cost efficiency'],
      icon: '🔄'
    },
    {
      title: 'DLM Extendable Design',
      description: 'Unique telescopic system adapts to tunnel progress',
      benefits: ['400-800m storage capacity', 'Smooth extension', 'Flexible configuration'],
      icon: '📐'
    },
    {
      title: 'Synchronized Control',
      description: 'Perfect coordination with TBM advancement',
      benefits: ['Automated operation', 'Real-time monitoring', 'Safety enhanced'],
      icon: '🎯'
    },
    {
      title: 'Modular Components',
      description: 'Easy assembly and maintenance in confined spaces',
      benefits: ['Quick installation', 'Reduced maintenance', 'Adaptable design'],
      icon: '🔧'
    }
  ]

  // Project case studies
  const projectScenarios = [
    {
      title: 'Metro Tunnel Project',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      length: '5.2 km',
      duration: '18 months',
      description: 'Urban subway construction with zero interruption'
    },
    {
      title: 'Mountain Tunnel System',
      image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&h=600&fit=crop',
      length: '8.7 km',
      duration: '24 months',
      description: 'High-altitude tunnel boring with continuous muck removal'
    },
    {
      title: 'Water Diversion Tunnel',
      image: 'https://images.unsplash.com/photo-1628175715904-22d32c596970?w=800&h=600&fit=crop',
      length: '12.3 km',
      duration: '36 months',
      description: 'Large diameter tunnel with high-capacity conveyor system'
    }
  ]

  const [activeScenario, setActiveScenario] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Full Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
            alt="Tunnel Construction Background"
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
                    Tunnel Boring Machine Integration
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Tunneling Conveyor Extension Systems
                </h1>
                
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Revolutionary continuous muck removal system with telescopic conveyor technology. 
                  Seamlessly extends with TBM advancement, ensuring uninterrupted tunnel construction 
                  with DLM's unique extendable design.
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
          </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50 animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Continuous Extension Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Seamless integration with tunnel boring machines for non-stop operation
            </p>
          </div>

          {/* Simple Process Steps */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-5xl">🚇</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">TBM Advances</h3>
                <p className="text-gray-600">As the tunnel boring machine progresses forward, it continuously excavates material</p>
              </div>
              
              <div className="text-center md:mt-12">
                <div className="bg-blue-100 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-5xl">📦</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Belt Extends</h3>
                <p className="text-gray-600">Stored conveyor belt automatically feeds out from the storage bin system</p>
              </div>
              
              <div className="text-center md:mt-24">
                <div className="bg-blue-100 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-5xl">♻️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Flow</h3>
                <p className="text-gray-600">Muck removal continues without interruption throughout the tunneling process</p>
              </div>
            </div>

            {/* Connection Lines - Hidden on mobile */}
            <div className="hidden md:block relative -mt-48 mb-12">
              <svg className="w-full h-24" viewBox="0 0 800 100">
                <path d="M 150 50 Q 300 20 450 50" stroke="#3B82F6" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
                <path d="M 450 50 Q 600 80 750 50" stroke="#3B82F6" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
              </svg>
            </div>
          </div>

          {/* Key Benefits Box */}
          <div className="mt-16 bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">System Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 rounded-full p-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Zero Downtime</h4>
                  <p className="text-gray-600 text-sm">No need to stop TBM for conveyor extension</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 rounded-full p-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Automated Process</h4>
                  <p className="text-gray-600 text-sm">PLC-controlled synchronized operation</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 rounded-full p-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Safety Enhanced</h4>
                  <p className="text-gray-600 text-sm">Reduced manual work in tunnel environment</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 rounded-full p-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Cost Efficient</h4>
                  <p className="text-gray-600 text-sm">Faster tunnel completion, lower project costs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-white animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Revolutionary Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Designed specifically for continuous tunnel construction
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature showcase */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-5xl mb-6">{keyFeatures[activeFeature].icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {keyFeatures[activeFeature].title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {keyFeatures[activeFeature].description}
              </p>
              <ul className="space-y-3">
                {keyFeatures[activeFeature].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Feature selector */}
            <div className="space-y-4">
              {keyFeatures.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold text-lg">{feature.title}</h4>
                      <p className={`text-sm mt-1 ${activeFeature === index ? 'text-blue-100' : 'text-gray-600'}`}>
                        Click to learn more
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Applications Section */}
      <section className="py-24 bg-gray-50 animate-section">
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
                      <span className="text-orange-400 font-bold">Tunnel Length:</span> {projectScenarios[activeScenario].length}
                    </div>
                    <div>
                      <span className="text-orange-400 font-bold">Duration:</span> {projectScenarios[activeScenario].duration}
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

      {/* Technical Details Tabs */}
      <section className="py-20 bg-white animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Excellence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced engineering for challenging tunnel environments
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
                onClick={() => setActiveTab('specifications')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'specifications' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Specifications
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Zero Downtime</h3>
                  <p className="text-gray-600">Continuous operation during tunnel advancement</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">High Efficiency</h3>
                  <p className="text-gray-600">Automated extension synchronized with TBM</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Design</h3>
                  <p className="text-gray-600">Adaptable to various tunnel diameters</p>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Storage System</h4>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Belt Storage Capacity</span>
                        <span className="font-semibold">400-800m (customizable)</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Storage Bin Design</span>
                        <span className="font-semibold">Vertical or Horizontal</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Extension Speed</span>
                        <span className="font-semibold">Synchronized with TBM</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Belt Width</span>
                        <span className="font-semibold">800-1400mm</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Drive System</h4>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Main Drive Power</span>
                        <span className="font-semibold">Up to 1000kW</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Booster Drives</span>
                        <span className="font-semibold">Multiple units available</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Control System</span>
                        <span className="font-semibold">PLC automated</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Safety Features</span>
                        <span className="font-semibold">Emergency stop, monitoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'advantages' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Operational Benefits</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      No interruption to TBM operations during extension
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Eliminates manual handling of conveyor extensions
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Reduced labor requirements in hazardous areas
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Economic Advantages</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Increased tunnel advancement rates
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Lower operational costs per meter
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Reduced project timeline and costs
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 animate-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Revolutionize Your Tunnel Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our extendable conveyor systems ensure continuous operation and maximum efficiency
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
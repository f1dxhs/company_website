'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ChevronRight, ArrowRight } from 'lucide-react'

export default function CBMEPTSPage() {
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
    { label: 'Dust Reduction', value: 'Maximum', icon: '🛡️' },
    { label: 'Material Flow', value: 'Uniform', icon: '⚡' },
    { label: 'Maintenance', value: 'Minimal', icon: '🔧' },
    { label: 'Versatility', value: 'Multi-angle', icon: '📐' }
  ]

  // Key features
  const keyFeatures = [
    {
      title: 'Maximum Dust Suppression',
      description: 'Advanced design minimizes dust generation while maintaining high material throughput',
      benefits: ['Environmentally friendly', 'Worker safety enhanced', 'Regulatory compliance'],
      icon: '🌬️'
    },
    {
      title: 'Multi-Directional Transfer',
      description: 'Flexible system adapts to various conveyor angles and operational requirements',
      benefits: ['360° transfer capability', 'Adaptable to site constraints', 'Reduced infrastructure needs'],
      icon: '🔄'
    },
    {
      title: 'Low Maintenance Design',
      description: 'Large volume design with minimal clogging points reduces maintenance frequency',
      benefits: ['Extended service life', 'Lower operating costs', 'Reduced downtime'],
      icon: '🛠️'
    },
    {
      title: 'DEM-Optimized Flow',
      description: 'Scientifically designed using DEM simulation for optimal material flow patterns',
      benefits: ['Uniform particle distribution', 'Minimal wear points', 'Consistent performance'],
      icon: '📊'
    }
  ]

  // System components
  const systemComponents = [
    {
      name: 'Flo-Control Hood',
      description: 'Adjustable flow control mechanism',
      feature: 'Optimizes material trajectory'
    },
    {
      name: 'Heavy Duty Chute',
      description: 'Reinforced inspection doors',
      feature: 'Easy maintenance access'
    },
    {
      name: 'Impact Cradle Bed',
      description: 'Cushioned impact zone',
      feature: 'Protects belt from damage'
    },
    {
      name: 'Slide-n-Roll Idler',
      description: 'Patented roller design',
      feature: 'Reduces friction and wear'
    },
    {
      name: 'Clamp Mount',
      description: 'Secure mounting system',
      feature: 'Quick installation'
    }
  ]

  // Technical analysis images
  const analysisImages = [
    {
      title: 'Airflow Pattern Analysis',
      description: 'CFD simulation showing dust containment',
      tag: 'DEM-CFD Flow 1'
    },
    {
      title: 'Material Flow Trajectory',
      description: 'Particle movement optimization',
      tag: 'DEM-CFD Flow 2'
    },
    {
      title: 'Impact Zone Analysis',
      description: 'Wear pattern and material distribution',
      tag: 'DEM-CFD Flow 3'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Full Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-800 to-gray-900">
          {/* Product image placeholder */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-gray-600 text-center">
              <div className="w-96 h-96 border-4 border-dashed border-gray-600 rounded-lg flex items-center justify-center">
                <p className="text-lg">CBMEPTS System Image</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full">
          {/* Dark overlay for text area */}
          <div className="bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
              <div className="max-w-3xl">
                <div className="mb-6">
                  <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Environmental Protection System
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  CBMEPTS - Controlled Bulk Material Eco-Friendly Transfer System
                </h1>
                
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Industry-leading DEM-designed transfer technology that maximizes dust suppression 
                  while ensuring uniform material flow. Our patented system offers complete control 
                  over bulk material transfer at any angle.
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
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* System Overview Section */}
      <section className="py-24 bg-gray-50 animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Revolutionary Transfer Technology</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Engineered with advanced DEM simulation for optimal material handling
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* System diagram placeholder */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="border-4 border-dashed border-gray-300 rounded-lg h-96 flex items-center justify-center">
                <p className="text-gray-500 text-center">
                  CBMEPTS Technical Diagram<br />
                  (Showing component layout)
                </p>
              </div>
            </div>

            {/* Key components list */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">System Components</h3>
              {systemComponents.map((component, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-2">
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{component.name}</h4>
                      <p className="text-gray-600 text-sm mb-1">{component.description}</p>
                      <p className="text-blue-600 text-sm font-medium">{component.feature}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEM-CFD Analysis Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-gray-900 animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced DEM-CFD Analysis</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Scientific approach to perfect material flow design
            </p>
          </div>

          {/* Analysis images grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {analysisImages.map((analysis, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
                <div className="h-64 bg-gray-800 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="w-48 h-48 border-2 border-dashed border-gray-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <p className="text-sm">{analysis.tag}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{analysis.title}</h3>
                  <p className="text-gray-300 text-sm">{analysis.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 max-w-3xl mx-auto">
              Using DEM-CFD coupled simulation technology, DLM can simulate material transfer scenarios 
              with precision, ensuring optimal design that maximizes dust control while maintaining 
              high throughput efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-white animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">System Advantages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive benefits for modern bulk material handling
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

      {/* Technical Details Tabs */}
      <section className="py-20 bg-gray-50 animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Engineered for reliability and performance
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
                onClick={() => setActiveTab('performance')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'performance' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Performance
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'applications' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Applications
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Dust Control</h3>
                  <p className="text-gray-600">Industry-leading dust suppression technology</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">High Efficiency</h3>
                  <p className="text-gray-600">Optimized flow patterns reduce energy consumption</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Modular Design</h3>
                  <p className="text-gray-600">Adaptable to various site configurations</p>
                </div>
              </div>
            )}

            {activeTab === 'performance' && (
              <div className="bg-white rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Material Handling</h4>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Transfer Capacity</span>
                        <span className="font-semibold">Up to 10,000 t/h</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Particle Size Range</span>
                        <span className="font-semibold">0-300mm</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Transfer Angles</span>
                        <span className="font-semibold">0-90°</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Belt Width Compatibility</span>
                        <span className="font-semibold">500-2400mm</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Environmental Performance</h4>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Dust Reduction</span>
                        <span className="font-semibold">Up to 95%</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Spillage Control</span>
                        <span className="font-semibold">Near zero</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Noise Level</span>
                        <span className="font-semibold">&lt;70 dB</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Maintenance Interval</span>
                        <span className="font-semibold">6-12 months</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">⛏️</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mining Industry</h4>
                  <p className="text-sm text-gray-600">Coal, iron ore, copper, and other minerals</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">🏗️</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Construction Materials</h4>
                  <p className="text-sm text-gray-600">Aggregates, sand, gravel, and cement</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">🚢</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ports & Terminals</h4>
                  <p className="text-sm text-gray-600">Bulk cargo handling systems</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">🏭</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Processing Plants</h4>
                  <p className="text-sm text-gray-600">Steel mills, power plants, chemical facilities</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">🌾</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Agriculture</h4>
                  <p className="text-sm text-gray-600">Grain handling and storage facilities</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">♻️</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Recycling</h4>
                  <p className="text-sm text-gray-600">Waste processing and material recovery</p>
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
            Ready to Optimize Your Material Transfer?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our CBMEPTS system delivers superior dust control and operational efficiency
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
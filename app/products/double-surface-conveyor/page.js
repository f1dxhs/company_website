'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ChevronRight, ArrowRight } from 'lucide-react'

export default function DoubleBeltConveyorPage() {
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
    { label: 'Surface Type', value: 'Double Carrying', icon: '📏' },
    { label: 'Transport', value: 'Simultaneous', icon: '⚡' },
    { label: 'Capacity', value: '2X Standard', icon: '🚀' },
    { label: 'Patent No.', value: 'ZL 2012 1 0066645.6', icon: '📍' }
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
      title:'Coal Mine in Malaysia',
      image: '/images/products/double_surface/double_surface_2.jpg',
      capacity: '1200t/h',
      length: '3000m',
      description: 'High-capacity dual-belt system for coal transport'
    },
    {
      title: 'Coal Mine in Yunan, China',
      image: '/images/products/double_surface/double_surface_conveyor.jpg',
      capacity: '1000t/h',
      length: '2400m',
      description: 'Simultaneous coal and gangue transport'
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

  // Features list
  const features = [
    'Double Carrying Surface',
    'Simultaneous coal and gangue transport',
    'Fewer roadways required',
    'Reduced tunnel cross-section width',
    'No change to tunnel width or height',
    'Solves transport challenges in older mines',
    'Increases mine production',
    'Accelerates mining progress',
    'Improves economic efficiency',
    'Lowers capital investment',
    'Reduces safety hazards'
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Full Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/products/double_surface_conveyor.jpg"
            alt="Double Belt Conveyor System Background"
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
                    Patented Innovation
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Double Work Surfaces Belt Conveyors
                </h1>
                
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  The Double Work Surfaces Belt Conveyor transforms a traditional single carrying surface into two parallel belts, doubling throughput and enabling simultaneous, efficient transport of coal and gangue. It sets a new direction for underground conveyor development.
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
            Application Scenarios
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
                      <span className="text-orange-400 font-bold">Benefit:</span> {projectScenarios[activeScenario].capacity}
                    </div>
                    <div>
                      <span className="text-orange-400 font-bold">Requirement:</span> {projectScenarios[activeScenario].length}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features & Advantages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Patented double-layer transport system that revolutionizes underground material handling
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
                onClick={() => setActiveTab('features')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'features' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Features
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Patented Design</h3>
                  <p className="text-gray-600">Patent No. ZL 2012 1 0066645.6</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Double Capacity</h3>
                  <p className="text-gray-600">Two parallel carrying surfaces</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Tunnel Changes</h3>
                  <p className="text-gray-600">Fits existing infrastructure</p>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="bg-blue-100 rounded-full p-1 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'advantages' && (
              <div>
                <p className="text-gray-600 text-center mb-8">
                  No change to tunnel width or height, throughput doubled
                </p>
                <div className="bg-blue-50 rounded-xl p-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Solves transport challenges in older mines, increases mine production, accelerates mining progress, 
                    improves economic efficiency, lowers capital investment, reduces safety hazards. Perfect for retrofit 
                    projects where tunnel expansion is not feasible or economical.
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
            Ready to Double Your Capacity?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our patented double belt conveyor system can transform your operations
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
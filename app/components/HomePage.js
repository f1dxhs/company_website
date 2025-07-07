'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X, ChevronRight, Mail, Phone, MapPin } from 'lucide-react'
import Header from './Header'
import Footer from './Footer'

export default function HomePage() {
  const featuredProducts = [
    {
      code: "DT Series",
      name: "Fixed Belt Conveyor Systems",
      description: "Universal fixed belt conveyor with advanced design for reliable bulk material transportation.",
      image: "products/fixed-belt-conveyor-system",
      slug: "fixed-belt-conveyor"
    },
    {
      code: "Tubular", 
      name: "Tubular Belt Conveyor",
      description: "Environmentally friendly enclosed design for dust-free material transport.",
      image: "products/tubular-belt-conveyor",
      slug: "tubular-belt-conveyor"
    },
    {
      code: "DJ Series",
      name: "Large Angle Corrugated Sidewall Conveyor",
      description: "Steep incline conveying up to 90° for space-saving vertical transport.",
      image: "products/large-angle-conveyor",
      slug: "large-angle-conveyor"
    },
    {
      code: "CBMEPTS",
      name: "Controlled Bulk Material Transfer System",
      description: "Eco-friendly transfer system with minimal dust emission and energy efficiency.",
      image: "products/cbmepts-transfer-system",
      slug: "cbmepts"
    }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="hero/bulk-material-conveyor-system-industrial"
            alt="DLM Heavy Industry Bulk Material Handling Systems"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          {/* <div className="mb-8">
            <div className="w-24 h-24 bg-white rounded flex items-center justify-center mx-auto mb-6">
              <span className="text-blue-900 font-bold text-10xl">DLM</span>
            </div>
          </div> */}
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            DongLin Machinery HEAVY INDUSTRY
            <span className="block text-blue-300">BULK MATERIAL HANDLING</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Leading manufacturer of bulk material handling systems with 30+ years of experience. Delivering reliable transport solutions across industries worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('about')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
            <button onClick={() => scrollToSection('products')} className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300">
              Our Products
            </button>
          </div>
        </div>
      </section>

      {/* Company Overview with Images */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About DLM</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Expert of Bulk Material Transportation
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sichuan DLM Heavy Industry Tech Co., LTD is a professional manufacturer specializing in bulk material handling systems. With over 30 years of industry experience and an annual production capacity of 30,000 tons, DLM provides customers with optimal material handling solutions.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our innovative approach accelerates validation, cutting early-stage costs and maximizing ROI. We deliver reliable transport solutions across industries with durable installations, sustainable modules, and efficient service.
              </p>
              <Link href="/about" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                Learn More About Us
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              <img
                src="company/dlm-manufacturing-facility"
                alt="DLM Manufacturing Facility"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">66,000</div>
              <p className="text-gray-600">m² Factory</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Employees</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">800+</div>
              <p className="text-gray-600">Satisfied Clients</p>
            </div>
          </div>

          {/* Capabilities Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-full h-48 mb-6">
                <img
                  src="capabilities/research-development-center"
                  alt="Research & Development"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Research & Development</h4>
              <p className="text-gray-600">Technology R&D Center with advanced design capabilities</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-full h-48 mb-6">
                <img
                  src="capabilities/manufacturing-workshop"
                  alt="Manufacturing"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Manufacturing</h4>
              <p className="text-gray-600">86,000m² production base with modern equipment</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-full h-48 mb-6">
                <img
                  src="capabilities/quality-assurance-testing"
                  alt="Quality Assurance"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h4>
              <p className="text-gray-600">ISO certified with comprehensive quality control system</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our comprehensive range of bulk material handling equipment meets the diverse needs of various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.code}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <Link 
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Solutions</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img
                  src="solutions/mining-industry-conveyor-system"
                  alt="Mining & Minerals"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Mining & Minerals
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Heavy-duty conveyor systems designed for harsh mining environments with maximum reliability.
                </p>
                <Link href="/solutions/mining" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Learn More
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img
                  src="solutions/port-terminal-conveyor-system"
                  alt="Ports & Terminals"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ports & Terminals
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  High-capacity conveyor solutions for efficient loading and unloading operations.
                </p>
                <Link href="/solutions/ports" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Learn More
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/solutions" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              View All Solutions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
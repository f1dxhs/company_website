'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ChevronRight, ArrowRight, Download, Filter, ArrowUpDown, X } from 'lucide-react'

export default function AccessoriesPage() {
  const [activeTab, setActiveTab] = useState('rollers')
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })
  const [filterValue, setFilterValue] = useState('')
  const [showFilter, setShowFilter] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [expandedFAQ, setExpandedFAQ] = useState(null)

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

  // Roller data
  const rollerData = [
    { model: 'DLM-R89', outerDiameter: 89, shaftLength: 200, maxLoad: 20, material: 'Steel Q235' },
    { model: 'DLM-R108', outerDiameter: 108, shaftLength: 250, maxLoad: 25, material: 'Steel Q235' },
    { model: 'DLM-R133', outerDiameter: 133, shaftLength: 315, maxLoad: 35, material: 'Steel Q235' },
    { model: 'DLM-R159', outerDiameter: 159, shaftLength: 380, maxLoad: 45, material: 'Steel Q235' },
    { model: 'DLM-R194', outerDiameter: 194, shaftLength: 465, maxLoad: 50, material: 'Steel Q235' },
    { model: 'DLM-R219', outerDiameter: 219, shaftLength: 530, maxLoad: 60, material: 'Steel Q235' },
  ]

  // Idler data
  const idlerData = [
    { model: 'DLM-I35', angle: 35, beltWidth: '500-650', weight: 8.5, sealType: 'Labyrinth' },
    { model: 'DLM-I45', angle: 45, beltWidth: '800-1000', weight: 12.3, sealType: 'Labyrinth' },
    { model: 'DLM-I35H', angle: 35, beltWidth: '1200-1400', weight: 18.7, sealType: 'Double Seal' },
    { model: 'DLM-I45H', angle: 45, beltWidth: '1600-1800', weight: 24.5, sealType: 'Double Seal' },
    { model: 'DLM-I35X', angle: 35, beltWidth: '2000-2200', weight: 32.1, sealType: 'Triple Seal' },
    { model: 'DLM-I45X', angle: 45, beltWidth: '2400', weight: 38.9, sealType: 'Triple Seal' },
  ]

  // Sorting function
  const handleSort = (key) => {
    let direction = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  // Get sorted data
  const getSortedData = (data) => {
    if (!sortConfig.key) return data

    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1
      }
      return 0
    })
  }

  // Filter data
  const getFilteredData = (data) => {
    if (!filterValue) return data
    
    return data.filter(item => 
      Object.values(item).some(value => 
        value.toString().toLowerCase().includes(filterValue.toLowerCase())
      )
    )
  }

  // Gallery images
  const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop', caption: 'Roller Ø200mm in Coastal Plant' },
    { id: 2, src: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=300&fit=crop', caption: 'Idler Assembly Test Rig' },
    { id: 3, src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop', caption: 'Heavy Duty Roller Installation' },
    { id: 4, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', caption: 'Precision Machining Process' },
    { id: 5, src: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=400&h=300&fit=crop', caption: 'Quality Control Testing' },
    { id: 6, src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop', caption: 'Warehouse Stock' },
  ]

  // Key advantages
  const keyAdvantages = [
    {
      icon: '🎯',
      title: 'Precision Machining',
      description: 'Tolerance ±0.05 mm'
    },
    {
      icon: '💪',
      title: 'High Load Capacity',
      description: 'Up to 50 kN per roller'
    },
    {
      icon: '🛡️',
      title: 'Corrosion Resistant',
      description: 'Suitable for harsh environments'
    }
  ]

  // FAQ data
  const faqData = [
    {
      question: 'What materials are available?',
      answer: 'We offer rollers and idlers in Steel Q235, Stainless Steel 304/316, and specialized polymer materials for specific applications.'
    },
    {
      question: 'What is the minimum order quantity?',
      answer: 'Minimum order quantity varies by product type. Standard items: 50 units. Custom specifications: 100 units minimum.'
    },
    {
      question: 'What is the lead time for custom diameters?',
      answer: 'Standard lead time for custom diameters is 4-6 weeks depending on quantity and specifications.'
    },
    {
      question: 'Do you provide installation support?',
      answer: 'Yes, we provide comprehensive installation guides and can arrange on-site technical support for large orders.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/products" className="text-gray-500 hover:text-gray-700">Products</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">Accessories</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=400&fit=crop"
            alt="Belt Conveyor Accessories"
            className="w-full h-full object-cover filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Accessories for Belt Conveyors
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              High-durability Rollers & Idlers in Multiple Sizes
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('rollers')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'rollers' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <span className="text-2xl mr-2">⚙️</span> Rollers
              </button>
              <button
                onClick={() => setActiveTab('idlers')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'idlers' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <span className="text-2xl mr-2">🔧</span> Idlers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Data Tables Section */}
      <section className="py-20 bg-gray-50 animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Table Controls */}
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-3xl font-bold text-gray-900">
              {activeTab === 'rollers' ? 'Roller Specifications' : 'Idler Specifications'}
            </h2>
            <div className="flex gap-3">
              <button
                onClick={() => setShowFilter(!showFilter)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </button>
            </div>
          </div>

          {/* Filter Input */}
          {showFilter && (
            <div className="mb-6 bg-white p-4 rounded-lg shadow">
              <div className="flex items-center gap-3">
                <label className="text-sm font-medium text-gray-700">Filter:</label>
                <input
                  type="text"
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                  placeholder="Search in table..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => setFilterValue('')}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Tables */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <p className="px-6 py-3 bg-gray-50 text-sm text-gray-600 border-b">
              Units in mm, Load in kN, Weight in kg
            </p>
            
            {activeTab === 'rollers' ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th 
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSort('model')}
                      >
                        <div className="flex items-center gap-1">
                          Model
                          <ArrowUpDown className="w-4 h-4" />
                        </div>
                      </th>
                      <th 
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSort('outerDiameter')}
                      >
                        <div className="flex items-center gap-1">
                          Outer Diameter
                          <ArrowUpDown className="w-4 h-4" />
                        </div>
                      </th>
                      <th 
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSort('shaftLength')}
                      >
                        <div className="flex items-center gap-1">
                          Shaft Length
                          <ArrowUpDown className="w-4 h-4" />
                        </div>
                      </th>
                      <th 
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSort('maxLoad')}
                      >
                        <div className="flex items-center gap-1">
                          Max Load
                          <ArrowUpDown className="w-4 h-4" />
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Material
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {getFilteredData(getSortedData(rollerData)).map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.model}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.outerDiameter}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.shaftLength}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.maxLoad}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.material}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th 
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSort('model')}
                      >
                        <div className="flex items-center gap-1">
                          Model
                          <ArrowUpDown className="w-4 h-4" />
                        </div>
                      </th>
                      <th 
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSort('angle')}
                      >
                        <div className="flex items-center gap-1">
                          Angle (°)
                          <ArrowUpDown className="w-4 h-4" />
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Belt Width (mm)
                      </th>
                      <th 
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSort('weight')}
                      >
                        <div className="flex items-center gap-1">
                          Weight
                          <ArrowUpDown className="w-4 h-4" />
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Seal Type
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {getFilteredData(getSortedData(idlerData)).map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.model}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.angle}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.beltWidth}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.weight}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.sealType}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20 bg-white animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Product Gallery
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600 text-center">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4">{selectedImage.caption}</p>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}

      {/* Key Advantages */}
      <section className="py-20 bg-gray-50 animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {keyAdvantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 animate-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Custom Sizes or Bulk Orders?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our sales team for personalized quotes and lead times.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
              Request a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button className="border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center">
              <Download className="mr-2 w-5 h-5" />
              Download Spec Sheet
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white animate-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronRight 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      expandedFAQ === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Links */}
      <section className="py-16 bg-gray-50 animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Resources</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Technical Documentation
              </a>
              <span className="text-gray-300">|</span>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Installation Guide
              </a>
              <span className="text-gray-300">|</span>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Maintenance Manual
              </a>
            </div>
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
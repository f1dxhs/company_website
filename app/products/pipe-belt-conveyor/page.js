'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ChevronRight, ArrowRight } from 'lucide-react'

export default function PipeBeltConveyorPage() {
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
    { label: 'Max Lumpiness', value: '20-400mm', icon: '🪨' },
    { label: 'Pipe Diameter', value: '100-850mm', icon: '⭕' },
    { label: 'Conveying Angle', value: 'Up to 30°', icon: '📐' },
    { label: 'Belt Width', value: '430-3100mm', icon: '📏' }
  ]

  // Advantages
  const advantages = [
    { 
      title: 'Environmental Protection',
      description: 'Fully enclosed transport prevents material spillage and dust pollution',
      icon: '🌿'
    },
    { 
      title: 'Flexible Layout',
      description: 'Can navigate around obstacles with horizontal and vertical curves',
      icon: '🔄'
    },
    { 
      title: 'Large Incline Capability',
      description: 'Capable of steep angle transport up to 30 degrees',
      icon: '📈'
    },
    { 
      title: 'Long Distance Transport',
      description: 'Suitable for high-volume long-distance material transport',
      icon: '🚄'
    },
    { 
      title: 'Low Maintenance Cost',
      description: 'Simple structure with fewer components requiring maintenance',
      icon: '🔧'
    },
    { 
      title: 'High Economic Efficiency',
      description: 'Lower investment and operation costs compared to alternatives',
      icon: '💰'
    }
  ]

  // Real project scenarios - 使用 metrics 数组方式
  const projectScenarios = [
    {
      title: 'Power Station in Chongqing, China',
      image: '/images/products/pipe/pipe_case1.jpg',
      description: 'Quiet, eco-friendly urban pipe conveyor system.',
      // 使用 metrics 数组定义要显示的指标
      metrics: [
        { label: 'Capacity', value: '2,400 t/h' },
        { label: 'Length', value: '1.5 km' },
        { label: 'Pipe Diameter', value: '500 mm' },  // 可以添加更多指标
      ]
    },
    {
      title: 'Salt Lake Lithium in Golmud, China',
      image: '/images/products/pipe/pipe_case2.jpg',
      description: 'High-altitude, corrosion-resistant salt lake pipe conveyor system.',
      metrics: [
        { label: 'Capacity', value: '500 t/h' },
        { label: 'Length', value: '16 km' },
        { label: 'Pipe Diameter', value: '250mm' }
      ]
    },
    {
      title: 'Power Station in Sichuan, China',
      image: '/images/products/pipe/pipe_case3.jpg',
      description: 'High-incline, all-weather mountainous pipe conveyor system.',
      metrics: [
        { label: 'Capacity', value: '2,500 t/h' },
        { label: 'unit', value: '34 conveyors' },
        { label: 'Pipe Diameter', value: '600mm' }

      ]
    }
  ]

  // Technical parameters table data
  const technicalParams = {
    headers: ['Max Lumpiness (mm)', '75% Cross Section (m²)', 'Pipe Diameter (mm)', 'Belt Width (mm)', '0.8', '1.0', '1.25', '1.6', '2.0', '2.5', '3.15', '4.0', '4.5', '5.0'],
    speeds: ['0.8', '1.0', '1.25', '1.6', '2.0', '2.5', '3.15', '4.0', '4.5', '5.0'],
    data: [
      { lumpiness: '20-30', section: '0.0059', diameter: '100', width: '430', values: ['17', '21', '27', '34', '-', '-', '-', '-', '-', '-'] },
      { lumpiness: '30-50', section: '0.013', diameter: '150', width: '600', values: ['38', '48', '59', '76', '95', '119', '-', '-', '-', '-'] },
      { lumpiness: '50-70', section: '0.023', diameter: '200', width: '700', values: ['67', '83', '104', '133', '166', '208', '-', '-', '-', '-'] },
      { lumpiness: '70-90', section: '0.04', diameter: '250', width: '1000', values: ['118', '147', '184', '236', '295', '369', '446', '-', '-', '-'] },
      { lumpiness: '90-100', section: '0.048', diameter: '300', width: '1100', values: ['141', '176', '212', '282', '353', '441', '556', '706', '-', '-'] },
      { lumpiness: '100-120', section: '0.068', diameter: '350', width: '1300', values: ['-', '238', '297', '380', '475', '594', '748', '950', '1069', '1188'] },
      { lumpiness: '120-150', section: '0.11', diameter: '400', width: '1600', values: ['-', '389', '486', '622', '778', '972', '1225', '1555', '1750', '1944'] },
      { lumpiness: '150-200', section: '0.157', diameter: '500', width: '1900', values: ['-', '558', '698', '893', '1116', '1395', '1758', '2232', '2512', '2794'] },
      { lumpiness: '200-250', section: '0.218', diameter: '600', width: '2250', values: ['-', '778', '972', '1244', '1555', '1944', '2449', '3110', '3499', '3888'] },
      { lumpiness: '250-300', section: '0.2842', diameter: '700', width: '2550', values: ['-', '1009', '1260', '1613', '2016', '2520', '3175', '4032', '4536', '5040'] },
      { lumpiness: '300-400', section: '0.4081', diameter: '850', width: '3100', values: ['-', '1454', '1818', '2327', '2909', '3636', '4581', '5818', '6545', '7272'] }
    ]
  }

  // Working principle stages
  const workingStages = [
    { stage: 'Loading', description: 'Material enters through feeding device', icon: '1️⃣' },
    { stage: 'Forming', description: 'Belt forms into circular tube shape', icon: '2️⃣' },
    { stage: 'Transport', description: 'Enclosed tube conveys material', icon: '3️⃣' },
    { stage: 'Unloading', description: 'Belt opens to discharge material', icon: '4️⃣' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Full Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src='/images/products/pipe/pipe_head.jpg'
            alt="Pipe Belt Conveyor System Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="max-w-3xl">
              <div className="mb-6">
                <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Tubular Belt Conveyor
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Pipe Belt Conveyor Systems
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Advanced enclosed belt conveyor system designed to overcome limitations of traditional conveyors. Ideal for environmentally sensitive applications and complex routing requirements.
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

      {/* Key Advantages - With Background Image */}
      <section className="relative py-20 animate-section overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=800&fit=crop"
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

      {/* Real-World Applications Section - 使用 metrics 数组渲染 */}
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
                  
                  {/* 使用 metrics 数组动态渲染指标 */}
                  <div className="flex flex-wrap gap-x-8 gap-y-3">
                    {projectScenarios[activeScenario].metrics.map((metric, index) => (
                      <div key={index}>
                        <span className="text-orange-400 font-bold">{metric.label}:</span> {metric.value}
                      </div>
                    ))}
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
              Comprehensive technical parameters and specifications for pipe belt conveyor systems
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
                onClick={() => setActiveTab('principle')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'principle' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Working Principle
              </button>
            </div>
          </div>

          {/* Tab content */}
          <div className="max-w-6xl mx-auto">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Functional Principle</h3>
                  <p className="text-gray-600 mb-4">
                    The conveyor operates via friction between idler sets arranged at specific intervals 
                    along the belt, which shape it into a tubular form. This design enables material 
                    transport through complex terrains and discharge at designated points.
                  </p>
                  <p className="text-gray-600">
                    By inverting the belt or installing special feeding devices, the return branch 
                    of the tubular belt can also be used to convey materials in the reverse direction, 
                    maximizing system efficiency.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Environmental Benefits</h3>
                  <p className="text-gray-600 mb-4">
                    The enclosed design prevents material spillage and dust emission, making it ideal 
                    for transporting environmentally sensitive materials or operating in areas with 
                    strict environmental regulations.
                  </p>
                  <p className="text-gray-600">
                    This system significantly reduces cleanup costs and environmental impact compared 
                    to traditional open belt conveyors, while providing protection from weather elements.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div>
                <div className="overflow-x-auto shadow-lg rounded-lg">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-3 py-3 text-left text-xs font-semibold whitespace-nowrap" rowSpan={2}>
                          Max Lumpiness<br/>(mm)
                        </th>
                        <th className="px-3 py-3 text-left text-xs font-semibold whitespace-nowrap" rowSpan={2}>
                          Cross Section<br/>(m²)
                        </th>
                        <th className="px-3 py-3 text-left text-xs font-semibold whitespace-nowrap" rowSpan={2}>
                          Pipe Diameter<br/>(mm)
                        </th>
                        <th className="px-3 py-3 text-left text-xs font-semibold whitespace-nowrap" rowSpan={2}>
                          Belt Width<br/>(mm)
                        </th>
                        <th className="px-3 py-3 text-center text-xs font-semibold" colSpan={10}>
                          Belt Speed (m/s) / Conveying Capacity (t/h)
                        </th>
                      </tr>
                      <tr className="bg-blue-500 text-white">
                        {technicalParams.speeds.map((speed, index) => (
                          <th key={index} className="px-3 py-2 text-center text-xs font-medium">
                            {speed}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {technicalParams.data.map((row, rowIndex) => {
                        const prevRow = rowIndex > 0 ? technicalParams.data[rowIndex - 1] : null;
                        const nextRow = rowIndex < technicalParams.data.length - 1 ? technicalParams.data[rowIndex + 1] : null;
                        const isLastInGroup = nextRow && parseFloat(nextRow.lumpiness.split('-')[0]) - parseFloat(row.lumpiness.split('-')[1]) > 0;
                        
                        return (
                          <React.Fragment key={rowIndex}>
                            <tr className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                              <td className="px-3 py-2 text-xs font-medium text-gray-900 whitespace-nowrap">{row.lumpiness}</td>
                              <td className="px-3 py-2 text-xs text-gray-700">{row.section}</td>
                              <td className="px-3 py-2 text-xs text-gray-700">{row.diameter}</td>
                              <td className="px-3 py-2 text-xs text-gray-700">{row.width}</td>
                              {row.values.map((value, index) => (
                                <td key={index} className="px-3 py-2 text-xs text-center text-gray-700">
                                  {value}
                                </td>
                              ))}
                            </tr>
                            {isLastInGroup && (
                              <tr>
                                <td colSpan={14} className="bg-gray-300 h-0.5"></td>
                              </tr>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-gray-600 text-center">
                  * Conveying capacity unit: t/h (tons per hour)<br/>
                  * "-" indicates that this configuration is not recommended or not available
                </p>
              </div>
            )}

            {activeTab === 'principle' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  {workingStages.map((stage, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">{stage.icon}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{stage.stage}</h4>
                      <p className="text-sm text-gray-600">{stage.description}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 rounded-lg p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Belt Deformation Process</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Polygonal idler sets arranged along conveyor gradually shape the belt into a tubular form</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Special feeding devices enable material transport through the return branch</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Belt opens at discharge point for controlled material release</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Continuous tube formation prevents material loss during transport</span>
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
            Ready to Upgrade Your Material Handling?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our pipe belt conveyor systems offer superior environmental protection and routing flexibility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
              Request Consultation
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/products" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center">
              Explore Other Solutions
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
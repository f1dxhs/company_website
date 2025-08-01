import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Kunming Steel Smart Environmental Mobile Stacker | DLM Heavy Industry',
  description: 'Intelligent eco-friendly mobile stacking system for Kunming Steel relocation and upgrade project.',
}

export default function KunmingSteelPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 bg-gradient-to-br from-gray-900 to-blue-900">
          <div className="absolute inset-0">
            <img
              src="projects/kunming-steel-mobile-stacker-system"
              alt="Kunming Steel Project"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <div className="mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Steel & Metals
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kunming Steel Relocation Project
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl">
                Smart environmental mobile stacking system engineered for Kunming Steel's historic relocation and environmental upgrade.
              </p>
            </div>
          </div>
        </section>

        {/* Project Context */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Background</h2>
                <p className="text-gray-600 mb-6">
                  As part of Kunming Iron & Steel's environmental relocation and upgrade project, DLM was commissioned to design and manufacture a smart, eco-friendly mobile stacking system. This project represents the convergence of advanced technology and environmental stewardship in the steel industry.
                </p>
                <p className="text-gray-600 mb-6">
                  The C-type stockyard layout with mobile stacking system was selected to enable uninterrupted material flow while significantly reducing environmental impact. The system features intelligent controls and real-time monitoring for optimal material management.
                </p>
                
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Project Objectives</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">•</span>
                      Minimize environmental impact during operations
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">•</span>
                      Achieve intelligent automation for efficiency
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">•</span>
                      Ensure flexible material handling capabilities
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">•</span>
                      Support sustainable steel production
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <img
                  src="projects/kunming-steel-c-type-stockyard"
                  alt="C-type Stockyard Layout"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                />
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">System Specifications</h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Configuration</dt>
                      <dd className="font-semibold text-gray-900">C-type Stockyard</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Stacker Type</dt>
                      <dd className="font-semibold text-gray-900">Mobile Rail-mounted</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Control System</dt>
                      <dd className="font-semibold text-gray-900">Intelligent PLC</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Environmental Features</dt>
                      <dd className="font-semibold text-gray-900">Dust Suppression</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Operation Mode</dt>
                      <dd className="font-semibold text-gray-900">Automatic/Manual</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Smart & Environmental Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl">🤖</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Intelligent Control</h3>
                <p className="text-gray-600 text-sm">
                  Advanced PLC system with real-time monitoring and automated stacking patterns.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 text-xl">🌿</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Eco-Friendly Design</h3>
                <p className="text-gray-600 text-sm">
                  Integrated dust suppression and minimal environmental footprint.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-600 text-xl">📊</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Data Analytics</h3>
                <p className="text-gray-600 text-sm">
                  Real-time inventory tracking and optimization algorithms.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-orange-600 text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Energy Efficient</h3>
                <p className="text-gray-600 text-sm">
                  Optimized movement patterns reduce energy consumption by 30%.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* C-Type Layout Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">C-Type Stockyard Advantages</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Benefits</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Uninterrupted material flow during stacking operations
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Flexible storage arrangement for multiple materials
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Optimal space utilization in confined areas
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Reduced equipment travel distances
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Impact</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      70% reduction in dust emissions
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Lower noise levels for urban environment
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Reduced carbon footprint per ton handled
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Compliance with strict environmental standards
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Significance */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Significance</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                This project exemplifies the steel industry's transition toward sustainable, intelligent operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">First</div>
                <p className="text-gray-600">Smart stockyard system in Yunnan Province</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">70%</div>
                <p className="text-gray-600">Reduction in environmental emissions</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">Model</div>
                <p className="text-gray-600">For steel industry environmental upgrades</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <Link href="/projects" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </Link>
              
              <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Discuss Your Smart Solution
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
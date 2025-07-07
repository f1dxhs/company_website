import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Golmud 16KM Belt Conveyor Project | DLM Heavy Industry',
  description: 'One of the longest single-flight belt conveyors in China, serving Golmud salt lake for 50 years.',
}

export default function GolmudProjectPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section with Background Image */}
        <section className="relative pt-24 pb-12 bg-gradient-to-br from-blue-900 to-blue-700">
          <div className="absolute inset-0">
            <img
              src="projects/golmud-16km-salt-lake-conveyor"
              alt="Golmud 16KM Conveyor"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <div className="mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Mining & Minerals
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Golmud 16KM Belt Conveyor
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl">
                China's longest single-flight belt conveyor serving the Golmud salt lake mineral extraction, designed for 50 years of continuous operation.
              </p>
            </div>
          </div>
        </section>

        {/* Project Statistics */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">16 KM</div>
                <p className="text-gray-600">Total Length</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">50 Years</div>
                <p className="text-gray-600">Service Life</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
                <p className="text-gray-600">Drive Units</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">-30°C</div>
                <p className="text-gray-600">Min Temperature</p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <p className="text-gray-600 mb-6">
                  The Golmud 16KM belt conveyor represents one of China's most ambitious bulk material handling projects. Located in Qinghai Province, this conveyor system was designed to transport salt and mineral materials from the extraction site across the vast salt lake terrain.
                </p>
                <p className="text-gray-600 mb-6">
                  DLM applied advanced engineering solutions to ensure reliable operation in extreme conditions, including temperatures as low as -30°C and the corrosive environment of salt extraction. The conveyor features specialized components and materials to achieve its 50-year design life.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Variable frequency control for smooth start-up and energy efficiency
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Self-adaptive response to sudden operating condition changes
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Specialized anti-corrosion measures for salt environment
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Advanced monitoring system for predictive maintenance
                  </li>
                </ul>
              </div>
              
              <div>
                <img
                  src="projects/golmud-conveyor-salt-lake-landscape"
                  alt="Golmud Conveyor System"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                />
                
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
                  <dl className="grid grid-cols-2 gap-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Belt Width</dt>
                      <dd className="text-lg font-semibold text-gray-900">1400mm</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Belt Speed</dt>
                      <dd className="text-lg font-semibold text-gray-900">4.5 m/s</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Drive Power</dt>
                      <dd className="text-lg font-semibold text-gray-900">5 × 630kW</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Material</dt>
                      <dd className="text-lg font-semibold text-gray-900">Salt/Minerals</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Challenges */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Engineering Excellence</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">❄️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Extreme Climate</h3>
                <p className="text-gray-600 text-center">
                  Designed to operate reliably in temperatures ranging from -30°C to +40°C with special cold-weather materials.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🧂</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Corrosion Resistance</h3>
                <p className="text-gray-600 text-center">
                  Special coatings and materials resist the highly corrosive salt environment for 50-year service life.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">📏</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Long Distance</h3>
                <p className="text-gray-600 text-center">
                  Advanced belt tensioning and drive systems maintain optimal performance over 16 kilometers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Impact */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Impact & Benefits</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Economic Benefits</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Reduced transportation costs by 60% compared to truck transport
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Enabled large-scale salt lake development
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Created local employment opportunities
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
                      Eliminated thousands of truck trips daily
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Significantly reduced carbon emissions
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Minimal disturbance to fragile ecosystem
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <Link href="/projects" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </Link>
              
              <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Start Your Project
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
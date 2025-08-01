import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Kyrgyzstan 9.8KM Mining Conveyor | DLM Heavy Industry',
  description: 'International mining conveyor project in Kyrgyzstan demonstrating DLM\'s global capabilities.',
}

export default function KyrgyzstanProjectPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 bg-gradient-to-br from-purple-900 to-indigo-700">
          <div className="absolute inset-0">
            <img
              src="projects/kyrgyzstan-mining-conveyor-mountain"
              alt="Kyrgyzstan Mining Project"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <div className="mb-4">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  International Project
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kyrgyzstan 9.8KM Belt Conveyor
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl">
                Comprehensive production line conveyor system for overseas mining operations, showcasing DLM's international project capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">International Excellence</h2>
                <p className="text-gray-600 mb-6">
                  DLM's expertise extends globally, as demonstrated by this significant project in Kyrgyzstan. Our belt conveyors are engineered and manufactured with industrial precision, ensuring reliable performance and cost-effective operation in challenging international environments.
                </p>
                <p className="text-gray-600 mb-6">
                  The 9.8-kilometer conveyor system was designed to handle the specific requirements of high-altitude mining operations, with careful consideration for extreme weather conditions and remote location challenges.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Highlights</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Complete design, manufacturing, and installation support
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Adapted for high-altitude operations (2000+ meters)
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Cold weather package for -40°C conditions
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    International standards compliance
                  </li>
                </ul>
              </div>
              
              <div>
                <img
                  src="projects/kyrgyzstan-conveyor-installation-site"
                  alt="Kyrgyzstan Installation"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                />
                
                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Details</h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Total Length</dt>
                      <dd className="font-semibold text-gray-900">9.8 kilometers</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Elevation Change</dt>
                      <dd className="font-semibold text-gray-900">Significant</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Climate Adaptation</dt>
                      <dd className="font-semibold text-gray-900">Extreme Cold</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Material Handled</dt>
                      <dd className="font-semibold text-gray-900">Mining Ore</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Project Type</dt>
                      <dd className="font-semibold text-gray-900">Turnkey Solution</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* International Capabilities */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">DLM's International Capabilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Global Standards</h3>
                <p className="text-gray-600 text-center">
                  Equipment designed and manufactured to meet international standards and certifications.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Technical Support</h3>
                <p className="text-gray-600 text-center">
                  Comprehensive installation supervision and training provided by experienced engineers.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Logistics Excellence</h3>
                <p className="text-gray-600 text-center">
                  Efficient packaging and shipping solutions for international project delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Challenges & Solutions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Overcoming Challenges</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Challenges Faced</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">⚠️</span>
                    High altitude operations above 2000 meters
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">⚠️</span>
                    Extreme temperature variations (-40°C to +35°C)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">⚠️</span>
                    Remote location with limited infrastructure
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">⚠️</span>
                    Cross-border logistics and customs
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">DLM Solutions</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Specialized components for thin air conditions
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Arctic-grade materials and lubricants
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Modular design for easier transport
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Complete documentation and support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Project Success */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Project Success</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">On Time</div>
                  <p className="text-gray-600">Delivered despite logistical challenges</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">On Budget</div>
                  <p className="text-gray-600">Cost-effective international solution</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">Reliable</div>
                  <p className="text-gray-600">Continuous operation in extreme conditions</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg text-gray-700 italic mb-4">
                  "DLM's international project management capabilities and technical expertise were crucial to our project's success. The conveyor system has exceeded our expectations."
                </p>
                <p className="text-gray-600">- Mining Operations Director</p>
              </div>
            </div>
          </div>
        </section>

        {/* International Experience */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Reach</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                DLM has successfully completed projects in 19 countries, bringing world-class material handling solutions to diverse markets.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Our International Services Include:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <span className="text-purple-500 mr-3">✓</span>
                  <span className="text-gray-700">Project feasibility studies</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-500 mr-3">✓</span>
                  <span className="text-gray-700">Custom engineering design</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-500 mr-3">✓</span>
                  <span className="text-gray-700">Manufacturing to standards</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-500 mr-3">✓</span>
                  <span className="text-gray-700">Export documentation</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-500 mr-3">✓</span>
                  <span className="text-gray-700">Installation supervision</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-500 mr-3">✓</span>
                  <span className="text-gray-700">Training & commissioning</span>
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
              
              <Link href="/contact" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Discuss International Projects
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
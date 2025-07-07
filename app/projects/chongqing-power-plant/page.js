import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Chongqing Fuling Longqiao Power Plant Tubular Conveyor | DLM Heavy Industry',
  description: 'Φ500mm tubular belt conveyor project for Fuling Longqiao Power Plant, demonstrating industrial zone adaptation.',
}

export default function ChongqingProjectPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 bg-gradient-to-br from-orange-900 to-orange-700">
          <div className="absolute inset-0">
            <img
              src="projects/chongqing-power-plant-tubular-conveyor"
              alt="Chongqing Power Plant Project"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <div className="mb-4">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Power Generation
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Chongqing Fuling Longqiao Power Plant
              </h1>
              <p className="text-xl text-orange-100 mb-8 max-w-3xl">
                Φ500mm tubular belt conveyor system designed for challenging mountainous terrain, adapting to industrial zones and residential areas.
              </p>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <p className="text-gray-600 mb-6">
                  The Fuling Longqiao Power Plant tubular belt conveyor project demonstrates DLM's ability to design and implement complex material handling systems in challenging environments. The Φ500mm tubular conveyor system was specifically chosen for its environmental benefits and flexible routing capabilities.
                </p>
                <p className="text-gray-600 mb-6">
                  Located in mountainous Chongqing, the conveyor route traverses through both industrial zones and residential areas, requiring a solution that minimizes environmental impact while maintaining high efficiency. The tubular design ensures zero material spillage and dust emission, making it ideal for this sensitive application.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Challenges</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Steep terrain with significant elevation changes
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Route passing through residential areas requiring noise and dust control
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Integration with existing power plant infrastructure
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Continuous operation requirements for power generation
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Project Details</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Location</dt>
                      <dd className="text-lg text-gray-900">Chongqing, China</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Conveyor Type</dt>
                      <dd className="text-lg text-gray-900">Tubular Belt Conveyor</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Diameter</dt>
                      <dd className="text-lg text-gray-900">Φ500mm</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Belt Speed</dt>
                      <dd className="text-lg text-gray-900">4.2 m/s</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Capacity</dt>
                      <dd className="text-lg text-gray-900">1800 t/h</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Application</dt>
                      <dd className="text-lg text-gray-900">Coal Transportation</dd>
                    </div>
                  </dl>
                </div>
                
                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Environmental Benefits</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Zero material spillage
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Dust-free operation
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Low noise operation
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Minimal visual impact
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Solution */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Solution</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-orange-600 text-xl">🔄</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Routing</h3>
                <p className="text-gray-600">
                  The tubular conveyor's ability to navigate horizontal and vertical curves allowed optimal routing through the complex terrain.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-orange-600 text-xl">🌿</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Environmental Protection</h3>
                <p className="text-gray-600">
                  Completely enclosed design prevents coal dust emission and protects residential areas along the route.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-orange-600 text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">High Efficiency</h3>
                <p className="text-gray-600">
                  1800 t/h capacity ensures reliable coal supply for continuous power generation operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-orange-50 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Excellence</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      Successfully integrated with existing power plant systems
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      Achieved target capacity of 1800 t/h
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      Zero environmental incidents since commissioning
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Community Benefits</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      No complaints from residential areas
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      Improved air quality along transport route
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      Enhanced power plant efficiency
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
                Discuss Your Project
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
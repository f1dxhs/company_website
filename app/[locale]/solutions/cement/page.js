import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Cement & Building Materials Solutions | DLM Heavy Industry',
  description: 'Specialized conveyor systems for cement plants and building material production facilities.',
}

export default function CementSolutionPage() {
  const processStages = [
    { stage: 'Raw Material Handling', icon: '⛏️', description: 'Limestone, clay, and additives transport' },
    { stage: 'Raw Mill Feeding', icon: '⚙️', description: 'Precise material dosing and blending' },
    { stage: 'Clinker Transport', icon: '🔥', description: 'High-temperature material handling' },
    { stage: 'Cement Mill Feeding', icon: '🏭', description: 'Clinker and gypsum conveying' },
    { stage: 'Finished Product', icon: '📦', description: 'Cement transport to storage silos' },
    { stage: 'Loading & Dispatch', icon: '🚛', description: 'Bulk loading for distribution' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-gray-900 to-gray-600">
        <div className="absolute inset-0">
          <img
            src="solutions/cement-plant-conveyor-system-clinker"
            alt="Cement Industry Solutions"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cement & Building Materials Solutions
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Integrated material handling systems for every stage of cement production and building material processing.
            </p>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Complete Process Coverage</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processStages.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.stage}</h4>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Detail */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tailored Solutions for Cement Industry
              </h2>
              <p className="text-gray-600 mb-6">
                DLM understands the unique challenges of cement production, from handling abrasive raw materials to managing high-temperature clinker. Our conveyor systems are designed to withstand harsh conditions while maintaining efficiency.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Heat-resistant designs for clinker handling up to 200°C
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Wear-resistant components for abrasive materials
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Enclosed systems for dust control
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Precise feeding systems for quality control
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="solutions/cement-plant-integrated-conveyor-network"
                alt="Cement Plant Conveyor Network"
                className="rounded-lg shadow-xl w-full mb-6"
              />
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-900 mb-3">Recommended Products</h4>
                <div className="space-y-3">
                  <Link href="/products/bucket-elevator" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">TDG/THG Bucket Elevators</span>
                    <span className="text-blue-600">→</span>
                  </Link>
                  <Link href="/products/fixed-belt-conveyor" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Heat-Resistant Belt Conveyors</span>
                    <span className="text-blue-600">→</span>
                  </Link>
                  <Link href="/products/cbmepts" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Dust-Free Transfer Systems</span>
                    <span className="text-blue-600">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Optimize Your Cement Production
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Partner with DLM for reliable material handling throughout your cement plant.
          </p>
          <Link href="/contact" className="bg-white text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block">
            Discuss Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
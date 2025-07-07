import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'CBMEPTS Controlled Bulk Material Transfer System | DLM Heavy Industry',
  description: 'Eco-friendly transfer system using DEM simulation for dust-free material handling with minimal degradation.',
}

export default function CbmeptsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              CBMEPTS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Controlled Bulk Material Eco-Friendly Transfer System
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Revolutionary transfer point design using DEM simulation to minimize dust, reduce material degradation, and optimize energy consumption.
            </p>
            <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Request Quote
            </Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Transfer Technology</h2>
                <p className="text-gray-600 mb-6">
                  CBMEPTS represents a breakthrough in material transfer technology, utilizing Discrete Element Method (DEM) simulation to engineer material transfer points that drastically reduce environmental impact while maximizing operational efficiency.
                </p>
                <p className="text-gray-600 mb-6">
                  This innovative system controls material flow at transfer points, minimizing dust generation, reducing material degradation, and lowering energy consumption. The design ensures smooth material transition between conveyors, eliminating traditional impact zones.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 80% reduction in dust emissions
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Minimal material degradation and breakage
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Reduced wear on conveyor belts and components
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Lower maintenance requirements
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Energy efficient operation
                  </li>
                </ul>
              </div>
              
              <div>
                <img
                  src="products/cbmepts-controlled-transfer-system-installation"
                  alt="CBMEPTS Transfer System"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                />
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">DEM Simulation Advantage</h3>
                  <p className="text-gray-600 mb-4">
                    Our engineers use advanced DEM simulation to analyze material flow patterns and optimize transfer geometry for each specific application, ensuring:
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Optimal chute angles and curves</li>
                    <li>• Controlled material velocity</li>
                    <li>• Minimized impact forces</li>
                    <li>• Smooth material flow transition</li>
                    <li>• Reduced spillage and dust generation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Application Industries</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⛏️</span>
                </div>
                <h4 className="font-semibold text-gray-900">Mining</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚢</span>
                </div>
                <h4 className="font-semibold text-gray-900">Ports</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-900">Power Plants</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h4 className="font-semibold text-gray-900">Cement</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
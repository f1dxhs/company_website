import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'DJ Series Large Angle Corrugated Sidewall Conveyor | DLM Heavy Industry',
  description: 'Space-saving conveyor solution for vertical and steep incline transport up to 90°. Ideal for limited space applications.',
}

export default function LargeAngleConveyorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              DJ Series
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Large Angle Corrugated Sidewall Conveyor
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Revolutionary conveyor system capable of transporting materials at angles from 0° to 90°, maximizing space efficiency in vertical transport applications.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Features</h2>
                <p className="text-gray-600 mb-6">
                  The DJ Series large angle corrugated sidewall conveyor is an ideal replacement for bucket elevators and inclined conveyors. With its superior performance, the DJ conveyor has become an ideal equipment for bulk material transportation due to its large conveying inclination (up to 90°).
                </p>
                <p className="text-gray-600 mb-6">
                  This space-saving solution features corrugated sidewalls and cleats that prevent material rollback, enabling vertical or near-vertical transport in confined spaces. The modular design allows for easy installation and maintenance.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li>• Conveying angle: 0° to 90°</li>
                  <li>• Significant space savings</li>
                  <li>• High lifting capacity</li>
                  <li>• No material spillage or rollback</li>
                  <li>• Low maintenance requirements</li>
                  <li>• Suitable for various bulk materials</li>
                </ul>
              </div>
              <div>
                <img
                  src="products/dj-series-large-angle-conveyor-vertical-transport"
                  alt="DJ Series Large Angle Conveyor"
                  className="w-full h-96 object-cover rounded-lg shadow-lg mb-6"
                />
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Applications</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Underground mining to surface</li>
                    <li>• Port ship loading/unloading</li>
                    <li>• Multi-level building transport</li>
                    <li>• Limited space installations</li>
                    <li>• Steep terrain applications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Space Efficient</h3>
                <p className="text-gray-600">Minimal footprint with vertical transport capability saves valuable floor space.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Maintenance</h3>
                <p className="text-gray-600">Simple structure with accessible components for routine maintenance.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cost Effective</h3>
                <p className="text-gray-600">Lower initial investment and operating costs compared to traditional elevators.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
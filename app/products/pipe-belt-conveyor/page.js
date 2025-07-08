import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Tubular Belt Conveyor | DLM Heavy Industry',
  description: 'Environmentally friendly enclosed conveyor system preventing material spillage and dust emission for complex terrains.',
}

export default function TubularBeltConveyorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Tubular Series
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tubular Belt Conveyor
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Enclosed conveyor system that prevents material spillage and dust emission, ideal for environmentally sensitive areas and complex routing requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center">
                  Request Quote
                </Link>
                <Link href="/products" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-medium transition-colors text-center">
                  View All Products
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="products/tubular-belt-conveyor-enclosed-system-installation"
                alt="Tubular Belt Conveyor System"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Overview</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  The tubular belt conveyor represents an innovative solution for bulk material handling, where the belt forms a continuous tube to completely enclose the conveyed material. This design eliminates material spillage and prevents dust emissions, making it ideal for environmental protection requirements.
                </p>
                <p className="mb-6">
                  By enclosing the belt in a continuous tube of steel or plastic, the system enables material transport through complex terrains—such as steep inclines, sharp curves, and confined spaces—where traditional conveyors cannot operate. The versatile solution is widely used across power generation, metallurgy, construction materials, chemical processing, mining, coal handling, docks, and ports.
                </p>
                <p>
                  The enclosed design not only protects the environment but also protects the material from external contamination, making it suitable for handling materials that require protection from weather conditions or cross-contamination.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Advantages</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Zero material spillage
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Dust-free operation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Flexible routing capability
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Weather protection
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Low maintenance needs
                  </li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Typical Applications</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Chemical plants</li>
                  <li>• Port facilities</li>
                  <li>• Urban environments</li>
                  <li>• Cross-water transport</li>
                  <li>• Environmental sensitive areas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technical Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Protection</h3>
              <p className="text-gray-600">
                Completely enclosed design prevents material spillage and dust emission, meeting strict environmental regulations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Routing</h3>
              <p className="text-gray-600">
                Can navigate through horizontal and vertical curves, allowing installation in complex terrains and confined spaces.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Material Protection</h3>
              <p className="text-gray-600">
                Protects conveyed materials from weather conditions and external contamination throughout the transport process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Environmental Solution for Your Material Handling
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our experts to learn how tubular belt conveyors can solve your environmental and routing challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Request Technical Data
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors">
              Get Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
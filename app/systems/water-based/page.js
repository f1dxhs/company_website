import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Water-Based Drilling Fluid System | CSTD',
  description: 'High-performance water-based drilling fluid system for complex formations.',
}

export default function WaterBasedSystemPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              High-Performance Water-Based System
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Advanced water-based drilling fluid system with excellent rheological properties and wide temperature range capability.
            </p>
            <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Request Information
            </Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">System Overview</h2>
                <p className="text-gray-600 mb-6">
                  Our high-performance water-based drilling fluid system is engineered for complex drilling environments. 
                  It provides excellent performance in shale-rich formations and acidic gas environments.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Applications:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Shale formations</li>
                  <li>• High temperature wells</li>
                  <li>• Acidic gas environments (CO2, H2S)</li>
                  <li>• Environmentally sensitive areas</li>
                </ul>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop"
                  alt="Water-Based System"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
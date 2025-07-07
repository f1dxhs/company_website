import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Reservoir Protection System | CSTD',
  description: 'Specialized drilling fluid system for reservoir protection and formation damage prevention.',
}

export default function ReservoirProtectionSystemPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Reservoir Protection System
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Specialized system designed to minimize formation damage during drilling operations and preserve reservoir productivity.
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
                  Our reservoir protection drilling fluid system is specifically formulated to minimize formation damage 
                  and preserve reservoir permeability during drilling and completion operations.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Minimized formation damage</li>
                  <li>• Preserved reservoir permeability</li>
                  <li>• Enhanced production potential</li>
                  <li>• Reduced completion risks</li>
                </ul>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&h=400&fit=crop"
                  alt="Reservoir Protection System"
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
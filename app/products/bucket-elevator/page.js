import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'TDG/THG Bucket Elevator Systems | DLM Heavy Industry',
  description: 'High-capacity bucket elevators for vertical material handling in cement, coal, chemical, and grain industries.',
}

export default function BucketElevatorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              TDG/THG Series
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bucket Elevator Systems
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Upgraded vertical conveying solutions for industries requiring efficient lifting of bulk materials with minimal footprint.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Overview</h2>
                <p className="text-gray-600 mb-6">
                  TDG and THG series bucket elevators are upgraded versions of the DT and TH series, designed for various industries including cement, coal, sand and gravel, chemicals, and grain processing. These elevators provide efficient vertical material handling with high capacity and reliability.
                </p>
                <p className="text-gray-600 mb-6">
                  The series features advanced design improvements including enhanced bucket configurations, improved chain/belt systems, and optimized discharge mechanisms for maximum efficiency and minimal material degradation.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Main Parameters:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Lifting height: Up to 80 meters</li>
                  <li>• Capacity: 10-1600 m³/h</li>
                  <li>• Bucket options: Deep bucket, shallow bucket</li>
                  <li>• Drive options: Belt or chain</li>
                  <li>• Material temperature: Up to 200°C</li>
                </ul>
              </div>
              <div>
                <img
                  src="products/tdg-thg-bucket-elevator-cement-plant"
                  alt="TDG/THG Bucket Elevator"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">TDG Series</h4>
                    <p className="text-sm text-gray-600">Belt-type for materials with lower temperature and abrasiveness</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">THG Series</h4>
                    <p className="text-sm text-gray-600">Chain-type for high-temperature and abrasive materials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
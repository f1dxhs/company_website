import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'CS-CMC-LV Carboxymethyl Cellulose | CSTD',
  description: 'Premium filtration control agent for drilling fluids with superior mud cake formation.',
}

export default function CSCmcLvProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              CS-CMC-LV
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Carboxymethyl Cellulose
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Premium filtration control agent that forms dense mud cake and effectively reduces filtration loss.
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
                  CS-CMC-LV is a high-quality carboxymethyl cellulose designed for drilling fluid applications. 
                  It effectively controls filtration loss while improving mud properties.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li>• Superior filtration control</li>
                  <li>• Enhanced viscosity properties</li>
                  <li>• Improved shear strength</li>
                  <li>• Compatible with various mud systems</li>
                  <li>• Environmentally friendly</li>
                </ul>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1583912086096-8c60d75a53bb?w=600&h=400&fit=crop"
                  alt="CS-CMC-LV"
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
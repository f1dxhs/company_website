import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Coal & Chemical Industry Solutions | DLM Heavy Industry',
  description: 'Safe and efficient material handling solutions for coal processing and chemical plants.',
}

export default function ChemicalSolutionPage() {
  const safetyFeatures = [
    {
      feature: 'Explosion-Proof Design',
      description: 'Equipment certified for hazardous environments',
      icon: '🛡️'
    },
    {
      feature: 'Sealed Systems',
      description: 'Preventing material contamination and spillage',
      icon: '🔒'
    },
    {
      feature: 'Corrosion Resistance',
      description: 'Special coatings and materials for chemical resistance',
      icon: '🧪'
    },
    {
      feature: 'Emergency Systems',
      description: 'Quick-stop mechanisms and safety interlocks',
      icon: '🚨'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-gray-900 to-green-900">
        <div className="absolute inset-0">
          <img
            src="solutions/chemical-plant-enclosed-conveyor-system"
            alt="Chemical Industry Solutions"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Coal & Chemical Industry Solutions
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Specialized conveyor systems designed for safe handling of coal and chemical materials with environmental protection.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meeting Industry Challenges</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Coal and chemical industries require specialized solutions for safety, environmental protection, and material integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Coal Processing</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Coal washing plant material handling
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Coking plant feed systems
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Coal-to-chemical process integration
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Dust suppression and control
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Chemical Handling</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Bulk chemical transport
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Catalyst and additive feeding
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Contamination prevention
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Hazardous material compliance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Safety-First Design</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyFeatures.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.feature}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">DLM Chemical Industry Solutions</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <img
                  src="products/tubular-belt-conveyor-chemical-plant"
                  alt="Tubular Conveyor"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-gray-900 mb-2">Tubular Belt Conveyors</h4>
                <p className="text-gray-600 text-sm">Complete material enclosure preventing contamination and emissions</p>
              </div>
              
              <div className="text-center">
                <img
                  src="products/specialized-chemical-transfer-chute"
                  alt="Transfer System"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-gray-900 mb-2">Specialized Transfer Points</h4>
                <p className="text-gray-600 text-sm">Custom-designed for specific chemical properties and safety requirements</p>
              </div>
              
              <div className="text-center">
                <img
                  src="products/explosion-proof-conveyor-drive"
                  alt="Safety Equipment"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-gray-900 mb-2">Safety Equipment</h4>
                <p className="text-gray-600 text-sm">Explosion-proof motors and controls for hazardous areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Safe and Efficient Material Handling
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Trust DLM for your coal and chemical material handling needs.
          </p>
          <Link href="/contact" className="bg-white text-green-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block">
            Request Safety Assessment
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
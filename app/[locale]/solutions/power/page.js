import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Power Generation Solutions | DLM Heavy Industry',
  description: 'Reliable coal and ash handling systems for thermal power plants with proven performance.',
}

export default function PowerSolutionPage() {
  const systemComponents = [
    {
      name: 'Coal Handling System',
      description: 'From coal yard to boiler bunkers',
      features: ['Unloading', 'Stacking', 'Reclaiming', 'Crushing', 'Conveying to bunkers']
    },
    {
      name: 'Ash Handling System',
      description: 'Bottom ash and fly ash management',
      features: ['Ash collection', 'Transport to disposal', 'Dust-free operation', 'Environmental compliance']
    },
    {
      name: 'Limestone Handling',
      description: 'For FGD (Flue Gas Desulfurization) systems',
      features: ['Material receiving', 'Storage management', 'Precise feeding', 'Dust control']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-gray-900 to-orange-900">
        <div className="absolute inset-0">
          <img
            src="solutions/power-plant-coal-handling-conveyor-system"
            alt="Power Generation Solutions"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Power Generation Solutions
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Complete coal and ash handling systems ensuring reliable fuel supply for thermal power plants.
            </p>
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Power Plant Solutions</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              DLM provides integrated material handling systems covering the entire fuel cycle in thermal power generation.
            </p>
          </div>

          <div className="space-y-8">
            {systemComponents.map((component, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{component.name}</h3>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {component.features.map((feature, fIndex) => (
                    <div key={fIndex} className="bg-white rounded-lg p-3 text-center">
                      <p className="text-sm text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose DLM for Power Plants</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-600 text-sm">99.9% uptime ensuring continuous power generation</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Low Maintenance</h3>
              <p className="text-gray-600 text-sm">Robust design minimizing operational interruptions</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Environmental</h3>
              <p className="text-gray-600 text-sm">Dust suppression and enclosed systems for compliance</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Efficiency</h3>
              <p className="text-gray-600 text-sm">Optimized design for minimum power consumption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Reference */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Proven Track Record</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">100+</div>
                <p className="text-gray-600">Power plants served</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">30+</div>
                <p className="text-gray-600">Years of experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">5,000+</div>
                <p className="text-gray-600">MW capacity supported</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Power Your Plant with DLM Solutions
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let us design a reliable material handling system for your power generation needs.
          </p>
          <Link href="/contact" className="bg-white text-orange-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block">
            Contact Our Experts
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
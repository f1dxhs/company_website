import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Ports & Terminals Solutions | DLM Heavy Industry',
  description: 'High-capacity conveyor solutions for efficient bulk cargo handling in ports and terminals.',
}

export default function PortsSolutionPage() {
  const applications = [
    {
      title: 'Ship Loading/Unloading',
      description: 'Efficient transfer of bulk materials between ships and shore',
      capacity: 'Up to 10,000 t/h',
      icon: '🚢'
    },
    {
      title: 'Stockyard Management',
      description: 'Conveyor systems for stockpile formation and reclaiming',
      capacity: 'Multiple material handling',
      icon: '📦'
    },
    {
      title: 'Terminal Logistics',
      description: 'Integrated systems connecting berths, storage, and inland transport',
      capacity: 'Continuous operation',
      icon: '🏗️'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-blue-900 to-blue-600">
        <div className="absolute inset-0">
          <img
            src="solutions/port-terminal-conveyor-system-ship-loading"
            alt="Port Terminal Solutions"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ports & Terminals Solutions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              High-capacity material handling systems designed for modern port operations and bulk cargo terminals.
            </p>
          </div>
        </div>
      </section>

      {/* Key Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Port Terminal Applications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4 text-center">{app.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
                <p className="text-gray-600 mb-3">{app.description}</p>
                <p className="text-blue-600 font-semibold">{app.capacity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Integrated Port Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                DLM provides complete material handling solutions for ports and terminals, from ship unloading to inland transportation. Our systems are designed for maximum efficiency and minimal environmental impact.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">High Capacity Systems</h4>
                    <p className="text-gray-600 text-sm">Conveyor systems capable of handling up to 10,000 t/h for rapid vessel turnaround</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Environmental Protection</h4>
                    <p className="text-gray-600 text-sm">Enclosed conveyor options and dust suppression systems for clean operations</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Flexible Design</h4>
                    <p className="text-gray-600 text-sm">Modular systems that can adapt to different vessel sizes and cargo types</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="solutions/port-terminal-integrated-conveyor-network"
                alt="Integrated Port Conveyor System"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products for Ports */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recommended Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Fixed Belt Conveyor</h3>
              <p className="text-gray-600 text-sm mb-4">Primary transportation system for continuous cargo movement</p>
              <Link href="/products/fixed-belt-conveyor" className="text-blue-600 font-medium hover:text-blue-700">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Tubular Belt Conveyor</h3>
              <p className="text-gray-600 text-sm mb-4">Dust-free solution for environmentally sensitive port areas</p>
              <Link href="/products/tubular-belt-conveyor" className="text-blue-600 font-medium hover:text-blue-700">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">CBMEPTS Transfer System</h3>
              <p className="text-gray-600 text-sm mb-4">Optimized transfer points for minimal dust and spillage</p>
              <Link href="/products/cbmepts" className="text-blue-600 font-medium hover:text-blue-700">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Optimize Your Port Operations
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us to design an efficient material handling system for your port or terminal.
          </p>
          <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block">
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
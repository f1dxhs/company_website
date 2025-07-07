import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'DT/TD Series Fixed Belt Conveyor Systems | DLM Heavy Industry',
  description: 'Universal fixed belt conveyor systems for reliable bulk material transportation. Standardized design with high capacity and long-distance capabilities.',
}

export default function FixedBeltConveyorPage() {
  const specifications = [
    { property: 'Belt Width', value: '500mm - 2400mm' },
    { property: 'Belt Speed', value: '0.8 - 6.5 m/s' },
    { property: 'Conveying Capacity', value: 'Up to 10,000 t/h' },
    { property: 'Conveying Distance', value: 'Up to several kilometers' },
    { property: 'Incline Angle', value: '0° - 18°' },
    { property: 'Operating Temperature', value: '-20°C to +40°C' },
  ]

  const applications = [
    {
      title: 'Mining & Minerals',
      description: 'Heavy-duty transportation for coal, ore, and mineral processing',
      icon: '⛏️'
    },
    {
      title: 'Ports & Terminals',
      description: 'Efficient bulk cargo handling for import/export operations',
      icon: '🚢'
    },
    {
      title: 'Power Plants',
      description: 'Coal and ash handling systems for thermal power generation',
      icon: '⚡'
    },
    {
      title: 'Cement Industry',
      description: 'Raw material and clinker transportation in cement production',
      icon: '🏗️'
    }
  ]

  const benefits = [
    'Standardized design following national standards for easy maintenance',
    'High conveying capacity suitable for large-scale operations',
    'Long-distance transportation capability with minimal transfer points',
    'Modular design allows for easy expansion and modification',
    'Low operating costs with high reliability',
    'Compatible with various auxiliary equipment and systems'
  ]

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
                  DT/TD Series
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Fixed Belt Conveyor Systems
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Industry-standard belt conveyor systems delivering reliable, high-capacity bulk material transportation for mining, ports, and industrial applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center">
                  Request Quote
                </Link>
                <a href="#specifications" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-medium transition-colors text-center">
                  View Specifications
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src="products/dt-series-fixed-belt-conveyor-mining-operation"
                alt="DT Series Fixed Belt Conveyor System"
                className="rounded-lg shadow-2xl w-full"
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
                  The DT II/DT II (A) fixed belt conveyor series represents DLM's flagship product line, serving as a domestically standardized, general-purpose conveyor system. Originally based on the TD75 series and developed in accordance with international standards, these conveyors have become the industry standard for bulk material handling.
                </p>
                <p className="mb-6">
                  Our fixed belt conveyors are designed for continuous material transportation in various industries. The modular design allows for customization based on specific requirements including belt width, conveying distance, and material characteristics.
                </p>
                <p>
                  With over 30 years of manufacturing experience, DLM has supplied thousands of fixed belt conveyor systems worldwide, earning a reputation for reliability, efficiency, and superior performance in demanding industrial environments.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Capacity up to 10,000 t/h
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Belt width 500-2400mm
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Standardized components
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Modular design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Low maintenance costs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Applications</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              DT/TD series conveyors are versatile systems suitable for various industries and materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{app.title}</h3>
                <p className="text-gray-600 text-sm">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="specifications" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Parameter</th>
                      <th className="px-6 py-4 text-left font-semibold">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specifications.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 font-medium text-gray-900">{spec.property}</td>
                        <td className="px-6 py-4 text-gray-600">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="text-green-500 mt-1 mr-3 flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Layout Options</h4>
                <p className="text-gray-600 mb-3">
                  Available in various configurations:
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Horizontal layout</li>
                  <li>• Inclined layout</li>
                  <li>• Combined horizontal and inclined</li>
                  <li>• Multiple drive configurations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your Material Handling?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our technical experts to design the perfect conveyor solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Request Technical Data
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors">
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
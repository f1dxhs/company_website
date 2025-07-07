import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Mining & Minerals Solutions | DLM Heavy Industry',
  description: 'Complete bulk material handling solutions for mining operations including coal, ore, and mineral processing with 30+ years expertise.',
}

export default function MiningSolutionPage() {
  const challenges = [
    {
      title: 'Harsh Operating Conditions',
      description: 'Equipment must withstand extreme weather, dust, and abrasive materials',
      icon: '⛏️'
    },
    {
      title: 'High Capacity Requirements',
      description: 'Need for continuous operation with throughputs up to 10,000 t/h',
      icon: '📊'
    },
    {
      title: 'Long Distance Transport',
      description: 'Materials often need to be transported several kilometers',
      icon: '📏'
    },
    {
      title: 'Steep Terrain',
      description: 'Mining sites often have challenging topography requiring flexible solutions',
      icon: '⛰️'
    }
  ]

  const solutions = [
    {
      product: 'DT/TD Fixed Belt Conveyor',
      application: 'Primary transportation for coal and ore from mining face to processing plant',
      benefits: ['High capacity up to 10,000 t/h', 'Long distance capability', 'Reliable operation']
    },
    {
      product: 'DJ Large Angle Conveyor',
      application: 'Vertical transport from underground mines to surface',
      benefits: ['Space-saving design', 'Angles up to 90°', 'Reduced transfer points']
    },
    {
      product: 'CBMEPTS Transfer System',
      application: 'Dust-free material transfer at conveyor junction points',
      benefits: ['80% dust reduction', 'Minimal material degradation', 'Lower maintenance']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="absolute inset-0">
          <img
            src="solutions/mining-industry-bulk-conveyor-system"
            alt="Mining Industry Solutions"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mining & Minerals Industry Solutions
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive bulk material handling systems designed for the demanding requirements of mining operations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Industry Challenges</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="text-4xl mb-4">{challenge.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-gray-600 text-sm">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DLM Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">DLM Solutions for Mining</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              With over 30 years of experience, DLM provides integrated conveyor systems that meet the unique demands of mining operations.
            </p>
          </div>

          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.product}</h3>
                    <p className="text-gray-600">{solution.application}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {solution.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="flex items-center text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Highlight</h3>
                <h4 className="text-xl text-blue-600 mb-4">Garzweiler Mine Conveyor System</h4>
                <p className="text-gray-600 mb-6">
                  DLM supplied one of the world's longest single-flight belt conveyor systems for the Garzweiler open-pit mine, demonstrating our capability in large-scale mining projects.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    Length: 16 kilometers continuous conveying
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    Capacity: 50 years of reliable operation
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    Environmental: Reduced truck traffic significantly
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="projects/garzweiler-mine-16km-conveyor-system"
                  alt="Garzweiler Mine Project"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your Mining Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our experts design a custom material handling solution for your mining project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Request Consultation
            </Link>
            <Link href="/products" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors">
              View Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
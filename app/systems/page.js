import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Product Systems | Central South Technology Development',
  description: 'Comprehensive drilling fluid systems for various operational requirements.',
}

export default function SystemsPage() {
  const systems = [
    {
      title: "High-Performance Water-Based Drilling Fluid System",
      description: "Advanced water-based system with excellent rheological properties and wide temperature range capability. Ideal for complex formations including shale-rich areas and high acidic gas environments.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
      features: ["Wide Temperature Range", "Excellent Rheology", "Environmental Compliance", "Shale Compatibility"],
      applications: ["Shale Formations", "High Temperature Wells", "Acidic Gas Environments", "Environmental Sensitive Areas"],
      slug: "water-based"
    },
    {
      title: "Reservoir Protection Drilling Fluid System",
      description: "Specialized system designed to minimize formation damage during drilling operations. Protects reservoir permeability and maintains production potential.",
      image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&h=400&fit=crop",
      features: ["Formation Protection", "Permeability Preservation", "Minimal Invasion", "Production Optimization"],
      applications: ["Reservoir Drilling", "Production Wells", "Horizontal Drilling", "Completion Operations"],
      slug: "reservoir-protection"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Product Systems
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive drilling fluid systems engineered for optimal performance in diverse operational environments.
            </p>
          </div>
        </section>

        {/* Systems Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our System Solutions</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Each system is carefully designed to address specific drilling challenges and operational requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {systems.map((system, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* System Image */}
                  <div className="relative h-64">
                    <img
                      src={system.image}
                      alt={system.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        System Solution
                      </span>
                    </div>
                  </div>
                  
                  {/* System Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {system.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {system.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {system.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Applications:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {system.applications.map((app, appIndex) => (
                          <div key={appIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                            <span className="text-gray-700 text-sm">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link 
                      href={`/systems/${system.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Custom System Development
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Need a tailored solution? Our technical team can develop customized systems to meet your specific operational requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Discuss Requirements
              </Link>
              <Link href="/products" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
                View Products
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
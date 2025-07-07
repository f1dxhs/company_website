import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Industry Solutions | DLM Heavy Industry',
  description: 'Comprehensive bulk material handling solutions for mining, ports, power generation, cement, and chemical industries.',
}

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'Mining & Minerals',
      description: 'Heavy-duty conveyor systems designed for harsh mining environments, handling coal, ore, and minerals with capacities up to 10,000 t/h.',
      image: 'solutions/mining-industry-open-pit-conveyor',
      features: ['Long-distance transport', 'Steep angle capability', 'Harsh environment design'],
      href: '/solutions/mining',
      color: 'from-gray-800 to-gray-600'
    },
    {
      title: 'Ports & Terminals',
      description: 'High-capacity material handling systems for efficient bulk cargo operations, ship loading/unloading, and stockyard management.',
      image: 'solutions/port-terminal-ship-loader-conveyor',
      features: ['Ship loading systems', 'Stockyard management', 'Environmental protection'],
      href: '/solutions/ports',
      color: 'from-blue-800 to-blue-600'
    },
    {
      title: 'Power Generation',
      description: 'Reliable coal and ash handling systems ensuring continuous fuel supply and waste management for thermal power plants.',
      image: 'solutions/power-plant-coal-yard-conveyor',
      features: ['Coal handling systems', 'Ash disposal solutions', 'FGD material handling'],
      href: '/solutions/power',
      color: 'from-orange-800 to-orange-600'
    },
    {
      title: 'Cement & Building Materials',
      description: 'Integrated conveyor solutions for every stage of cement production, from raw material to finished product handling.',
      image: 'solutions/cement-plant-clinker-conveyor',
      features: ['Heat-resistant design', 'Dust control systems', 'Process integration'],
      href: '/solutions/cement',
      color: 'from-gray-700 to-gray-500'
    },
    {
      title: 'Coal & Chemical',
      description: 'Specialized safe handling systems for coal processing and chemical materials with explosion-proof and corrosion-resistant designs.',
      image: 'solutions/chemical-plant-enclosed-conveyor',
      features: ['Explosion-proof equipment', 'Sealed systems', 'Hazardous area certified'],
      href: '/solutions/chemical',
      color: 'from-green-800 to-green-600'
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
              Industry Solutions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Tailored bulk material handling solutions designed to meet the unique challenges of each industry, backed by 30+ years of expertise.
            </p>
          </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Solutions Across Industries</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                DLM delivers comprehensive material handling systems optimized for the specific requirements of each industry sector.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">800+</div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">76</div>
                <p className="text-gray-600">Partner Enterprises</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">19</div>
                <p className="text-gray-600">Countries Served</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>

            {/* Solutions Grid */}
            <div className="space-y-12">
              {solutions.map((solution, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}>
                  <div className="lg:flex">
                    {/* Image Section */}
                    <div className="lg:w-1/2 relative h-64 lg:h-auto">
                      <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-90`}></div>
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-4xl font-bold text-white text-center px-4">
                          {solution.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="lg:w-1/2 p-8 lg:p-12">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                      
                      <div className="mb-8">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Solutions:</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-center text-gray-600">
                              <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link 
                        href={solution.href}
                        className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                      >
                        Explore {solution.title} Solutions
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose DLM */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Industries Choose DLM</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Our commitment to innovation and quality has made us the preferred partner for bulk material handling solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Reliability</h3>
                <p className="text-gray-600">
                  Systems designed for 24/7 operation with minimal downtime and maximum efficiency.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Engineering</h3>
                <p className="text-gray-600">
                  Tailored solutions designed to meet specific industry requirements and site conditions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lifetime Support</h3>
                <p className="text-gray-600">
                  Comprehensive service from initial design through installation and ongoing maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Find the Right Solution for Your Industry
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact our industry experts to discuss your specific material handling challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Get Expert Consultation
              </Link>
              <Link href="/products" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors">
                Browse Products
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
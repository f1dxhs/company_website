import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Products | DLM Heavy Industry Tech',
  description: 'Explore our comprehensive range of bulk material handling conveyor systems.',
}

export default function ProductsPage() {
  const products = [
    {
      code: "DT&TD Series",
      name: "Fixed Belt Conveyor Systems",
      description: "Universal fixed belt conveyor serving as a domestically standardized, general-purpose product line. The DT II/DT II (A) series provides reliable and efficient bulk material transportation.",
      image: "products/dt-series-fixed-belt-conveyor-system",
      slug: "fixed-belt-conveyor",
      features: ["Standardized Design", "High Capacity", "Long Distance Transport", "Reliable Operation"],
      applications: ["Mining", "Ports", "Power Plants", "Chemical Industry", "Building Materials"]
    },
    {
      code: "Tubular",
      name: "Tubular Belt Conveyor",
      description: "Environmentally friendly enclosed conveyor system that prevents material spillage and dust emission. Ideal for complex terrains with steep inclines, sharp curves, and confined spaces.",
      image: "products/tubular-belt-conveyor-enclosed-system",
      slug: "tubular-belt-conveyor",
      features: ["Enclosed Design", "Environment Friendly", "Flexible Routing", "Low Maintenance"],
      applications: ["Chemical Processing", "Port Operations", "Urban Areas", "Environmental Sensitive Areas"]
    },
    {
      code: "DJ Series",
      name: "Large Angle Corrugated Sidewall Conveyor",
      description: "Capable of conveying materials at angles up to 90°, this space-saving solution is ideal for vertical or steep incline transport with corrugated sidewalls and cleats.",
      image: "products/dj-series-large-angle-corrugated-conveyor",
      slug: "large-angle-conveyor",
      features: ["0-90° Conveying Angle", "Space Saving", "High Lifting Height", "Spillage Prevention"],
      applications: ["Vertical Transport", "Limited Space Areas", "Multi-level Buildings", "Underground Mining"]
    },
    {
      code: "TDG/THG",
      name: "Bucket Elevator Systems",
      description: "Upgraded versions of the DT and TH series bucket elevators, suitable for industries such as cement, coal, sand and gravel, chemicals, and grain. Provides efficient vertical material handling.",
      image: "products/tdg-thg-bucket-elevator-system",
      slug: "bucket-elevator",
      features: ["High Lift Height", "Large Capacity", "Compact Structure", "Multiple Discharge Options"],
      applications: ["Cement Plants", "Coal Handling", "Grain Processing", "Chemical Industry"]
    },
    {
      code: "Tunnel",
      name: "Tunnel Boring Continuous Conveyor",
      description: "Specialized conveyor system for tunnel boring machines (TBM) operations. Features modular design with quick assembly and disassembly for underground construction projects.",
      image: "products/tunnel-boring-conveyor-system-tbm",
      slug: "tunnel-boring-conveyor",
      features: ["Modular Design", "Quick Assembly", "Underground Operation", "Continuous Transport"],
      applications: ["Tunnel Construction", "Underground Mining", "Subway Projects", "Water Diversion Projects"]
    },
    {
      code: "CBMEPTS",
      name: "Controlled Bulk Material Transfer System",
      description: "Eco-friendly transfer system using DEM simulation for optimized design. Minimizes dust emission, reduces material degradation, and provides energy-efficient operation.",
      image: "products/cbmepts-controlled-transfer-system",
      slug: "cbmepts",
      features: ["DEM Optimized", "Dust Suppression", "Energy Efficient", "Minimal Degradation"],
      applications: ["Transfer Points", "Loading Stations", "Multi-conveyor Systems", "Environmental Sensitive Areas"]
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
              Our Products
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive range of bulk material handling systems designed for reliability, efficiency, and environmental protection.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Portfolio</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Each conveyor system is engineered to meet specific material handling challenges across various industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  {/* Product Image */}
                  <div className="relative h-48">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {product.code}
                      </span>
                    </div>
                  </div>
                  
                  {/* Product Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 3).map((feature, featureIndex) => (
                          <span key={featureIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link 
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
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
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our technical team can design and manufacture customized conveyor systems to meet your specific bulk material handling requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Contact Technical Team
              </Link>
              <Link href="/solutions" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
                View Industry Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
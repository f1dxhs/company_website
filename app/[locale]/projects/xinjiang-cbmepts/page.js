import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Xinjiang Qinghua CBMEPTS Transfer Point | DLM Heavy Industry',
  description: 'Controlled bulk material eco-friendly transfer system upgrade for Xinjiang coal mine.',
}

export default function XinjiangCbmeptsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 bg-gradient-to-br from-green-900 to-green-700">
          <div className="absolute inset-0">
            <img
              src="projects/xinjiang-cbmepts-transfer-system"
              alt="CBMEPTS Transfer System"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <div className="mb-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Coal & Chemical
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Xinjiang Qinghua CBMEPTS Project
              </h1>
              <p className="text-xl text-green-100 mb-8 max-w-3xl">
                Revolutionary controlled bulk material transfer system upgrade eliminating dust emissions and reducing material degradation.
              </p>
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                <p className="text-gray-600 mb-6">
                  The Qinghua coal preparation plant in Xinjiang faced significant challenges at their conveyor transfer points. Traditional transfer chutes were causing:
                </p>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Severe dust emissions affecting worker health and environment
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    High material degradation reducing coal quality
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Frequent maintenance due to wear and blockages
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Energy waste from impact and turbulence
                  </li>
                </ul>
                
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Previous System Issues</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Dust Levels</p>
                      <p className="text-2xl font-bold text-red-600">High</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Material Loss</p>
                      <p className="text-2xl font-bold text-red-600">3-5%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Maintenance</p>
                      <p className="text-2xl font-bold text-red-600">Weekly</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Worker Safety</p>
                      <p className="text-2xl font-bold text-red-600">At Risk</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The CBMEPTS Solution</h2>
                <p className="text-gray-600 mb-6">
                  DLM's CBMEPTS (Controlled Bulk Material Eco-Friendly Transfer System) provided a revolutionary solution using DEM simulation and advanced engineering:
                </p>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    DEM-optimized chute geometry for smooth material flow
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Controlled material velocity to minimize dust generation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Reduced impact forces preserving material integrity
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Self-cleaning design eliminating blockages
                  </li>
                </ul>
                
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">After CBMEPTS Upgrade</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Dust Reduction</p>
                      <p className="text-2xl font-bold text-green-600">85%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Material Loss</p>
                      <p className="text-2xl font-bold text-green-600">{'<0.5%'}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Maintenance</p>
                      <p className="text-2xl font-bold text-green-600">Monthly</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Energy Savings</p>
                      <p className="text-2xl font-bold text-green-600">20%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technical Innovation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">DEM Simulation</h3>
                <p className="text-gray-600 text-center">
                  Advanced discrete element modeling optimized material flow patterns before installation.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">💨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Dust Suppression</h3>
                <p className="text-gray-600 text-center">
                  Engineered flow control eliminates air entrainment and dust generation at source.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Precision Design</h3>
                <p className="text-gray-600 text-center">
                  Custom-engineered for specific material properties and transfer geometry.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Process</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Site Assessment</h4>
                    <p className="text-gray-600">Detailed analysis of existing transfer points and material characteristics</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">DEM Modeling</h4>
                    <p className="text-gray-600">Computer simulation to optimize chute design for specific conditions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Manufacturing</h4>
                    <p className="text-gray-600">Precision fabrication of custom transfer chutes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Installation</h4>
                    <p className="text-gray-600">Rapid installation with minimal production downtime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Project Results</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                  <p className="text-gray-600">Dust Reduction</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">75%</div>
                  <p className="text-gray-600">Less Maintenance</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">20%</div>
                  <p className="text-gray-600">Energy Savings</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                  <p className="text-gray-600">Material Recovery</p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <blockquote className="text-xl text-gray-700 italic">
                  "The CBMEPTS upgrade has transformed our operation. We've seen immediate improvements in air quality and significant cost savings from reduced material loss and maintenance."
                </blockquote>
                <p className="mt-4 text-gray-600">- Plant Operations Manager</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <Link href="/projects" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </Link>
              
              <Link href="/products/cbmepts" className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Learn About CBMEPTS
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
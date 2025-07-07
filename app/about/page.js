import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'About Us | DLM Heavy Industry Tech',
  description: 'Learn about DLM - a leading manufacturer of bulk material handling systems with 30+ years experience.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About DLM Heavy Industry
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Expert of bulk material transportation - Forge ahead and pursue excellence
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Sichuan DLM Heavy Industry Tech Co., LTD is a professional manufacturer specializing in bulk material handling systems. Founded in 1994, we have grown from a collective economic development model to become an industry leader with over 30 years of experience.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  DLM specializes in bulk material handling, combining design, R&D, and manufacturing. We deliver reliable transport solutions across industries with durable installations, sustainable modules, and efficient service. Our innovative approach accelerates validation, cutting early-stage costs and maximizing ROI.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we operate from our 66,000m² Technology R&D Center and 86,000m² manufacturing base, serving over 800 clients across 76 partner enterprises in 13 provinces and 19 international markets.
                </p>
              </div>
              
              <div className="relative">
                <img
                  src="company/dlm-headquarters-building-sichuan"
                  alt="DLM Headquarters and Manufacturing Facility"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Development Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Development Journey</h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              <div className="space-y-12">
                <div className="flex items-center">
                  <div className="w-1/2 text-right pr-8">
                    <h3 className="text-xl font-bold text-gray-900">Before 1994</h3>
                    <p className="text-gray-600">Founded by Collective Economic Development Model</p>
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2"></div>
                  <div className="w-1/2 pl-8">
                    <h3 className="text-xl font-bold text-gray-900">2004</h3>
                    <p className="text-gray-600">Achieved ISO 9001:2000 quality certification</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2 text-right pr-8">
                    <h3 className="text-xl font-bold text-gray-900">2009</h3>
                    <p className="text-gray-600">Relocated and renamed as Sichuan Donglin Mining Machinery Co., Ltd.</p>
                  </div>
                  <div className="w-1/2"></div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2"></div>
                  <div className="w-1/2 pl-8">
                    <h3 className="text-xl font-bold text-gray-900">Present</h3>
                    <p className="text-gray-600">Leading manufacturer with 500+ employees serving 800+ clients worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Capabilities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Capabilities</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Comprehensive expertise across design, manufacturing, and service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">R&D</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Research & Development</h3>
                <p className="text-gray-600 text-center">
                  66,000m² Technology R&D Center with advanced design capabilities and professional engineering team.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">MFG</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Manufacturing</h3>
                <p className="text-gray-600 text-center">
                  86,000m² production base with annual capacity of 30,000 tons and advanced manufacturing equipment.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">QA</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Quality Assurance</h3>
                <p className="text-gray-600 text-center">
                  ISO 9001, ISO 14001, ISO 45001 certified with comprehensive quality control system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-gray-600">Employees</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">800+</div>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">19</div>
                <p className="text-gray-600">Countries Served</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
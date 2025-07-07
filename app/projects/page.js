import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Projects | DLM Heavy Industry',
  description: 'Showcase of DLM\'s major bulk material handling projects across various industries worldwide.',
}

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Chongqing Fuling Longqiao Power Plant',
      subtitle: 'Φ500mm Tubular Belt Conveyor',
      location: 'Chongqing, China',
      industry: 'Power Generation',
      icon: '⚡',
      color: 'bg-orange-100 text-orange-600',
      href: '/projects/chongqing-power-plant',
      keySpecs: '4.2m/s • 1800t/h'
    },
    {
      id: 2,
      title: 'Golmud Salt Lake',
      subtitle: '16KM Long-Distance Conveyor',
      location: 'Qinghai, China',
      industry: 'Mining & Minerals',
      icon: '⛏️',
      color: 'bg-gray-100 text-gray-600',
      href: '/projects/golmud-16km',
      keySpecs: '16km • 50 years service'
    },
    {
      id: 3,
      title: 'Xinjiang Qinghua Coal Mine',
      subtitle: 'CBMEPTS Transfer Point Upgrade',
      location: 'Xinjiang, China',
      industry: 'Coal & Chemical',
      icon: '🔧',
      color: 'bg-green-100 text-green-600',
      href: '/projects/xinjiang-cbmepts',
      keySpecs: 'Dust-free • Energy efficient'
    },
    {
      id: 4,
      title: 'Kunming Steel Relocation',
      subtitle: 'Smart Environmental Mobile Stacker',
      location: 'Yunnan, China',
      industry: 'Steel & Metals',
      icon: '🏗️',
      color: 'bg-blue-100 text-blue-600',
      href: '/projects/kunming-steel-relocation',
      keySpecs: 'C-type • Eco-friendly'
    },
    {
      id: 5,
      title: 'Kyrgyzstan Mining Project',
      subtitle: '9.8KM Belt Conveyor System',
      location: 'Kyrgyzstan',
      industry: 'Mining & Minerals',
      icon: '🌍',
      color: 'bg-purple-100 text-purple-600',
      href: '/projects/kyrgyzstan-conveyor',
      keySpecs: '9.8km • Overseas project'
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
              Featured Projects
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Showcasing DLM's expertise through landmark projects that demonstrate our innovation, engineering excellence, and commitment to customer success.
            </p>
          </div>
        </section>

        {/* Project Statistics */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">800+</div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">19</div>
                <p className="text-gray-600">Countries</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Each project represents a unique challenge solved with innovative engineering and dedication to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={project.href}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Project Header */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 ${project.color} rounded-xl flex items-center justify-center`}>
                        <span className="text-3xl">{project.icon}</span>
                      </div>
                      <span className="text-sm text-gray-500">{project.industry}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-2">
                      {project.subtitle}
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </div>
                    
                    <div className="border-t pt-4">
                      <p className="text-sm font-medium text-blue-600">{project.keySpecs}</p>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="px-6 pb-4">
                    <span className="inline-flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                      View Details
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Projects */}
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                These are just a few examples of our extensive project portfolio.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industries We Serve</h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {['Mining', 'Power Generation', 'Ports & Terminals', 'Cement', 'Steel', 'Chemical', 'Coal'].map((industry) => (
                <div key={industry} className="bg-white px-6 py-3 rounded-full shadow-md">
                  <span className="text-gray-700 font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how DLM can deliver the perfect solution for your material handling needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Get Started
              </Link>
              <Link href="/solutions" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors">
                Explore Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
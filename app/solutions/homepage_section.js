      {/* Industry Solutions with Video Background */}
      <section className="relative py-24 animate-section bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=1920&h=1080&fit=crop"
            alt="Industrial Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 fade-up">Industry Solutions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 fade-up delay-100"></div>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto fade-up delay-200">
              Tailored conveyor solutions for diverse industries, engineered for specific operational challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mining & Minerals",
                description: "Heavy-duty conveyor systems designed for harsh mining environments with maximum reliability.",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
                link: "/solutions/mining",
                icon: "⛏️"
              },
              {
                title: "Ports & Terminals",
                description: "High-capacity conveyor solutions for efficient loading and unloading operations.",
                image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800&h=600&fit=crop",
                link: "/solutions/ports",
                icon: "🚢"
              },
              {
                title: "Power Generation",
                description: "Reliable material handling systems for coal-fired and biomass power plants.",
                image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&h=600&fit=crop",
                link: "/solutions/power",
                icon: "⚡"
              },
              {
                title: "Cement Industry",
                description: "Specialized conveyor systems for limestone, clinker, and cement transportation.",
                image: "https://images.unsplash.com/photo-1609557927087-f9d38ae2f32a?w=800&h=600&fit=crop",
                link: "/solutions/cement",
                icon: "🏗️"
              },
              {
                title: "Coal Handling",
                description: "Efficient coal transportation systems for mining and processing operations.",
                image: "https://images.unsplash.com/photo-1547328415-88a17eeb89a9?w=800&h=600&fit=crop",
                link: "/solutions/coal",
                icon: "⛽"
              }
            ].map((solution, index) => (
              <div 
                key={index} 
                className={`bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover-lift fade-up ${
                  index === 0 ? 'delay-100' : 
                  index === 1 ? 'delay-200' : 
                  index === 2 ? 'delay-300' : 
                  index === 3 ? 'delay-400' : 
                  'delay-500'
                }`}
              >
                <div className="relative h-56 overflow-hidden group">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 text-4xl">
                    {solution.icon}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-2xl font-bold text-shadow-dark">
                      {solution.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  <Link href={solution.link} className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 fade-up delay-700">
            <Link href="/solutions" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center">
              Explore All Solutions
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
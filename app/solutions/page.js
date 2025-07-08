'use client'

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function SolutionsPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const solutions = [
    {
      title: 'Mining & Minerals',
      description: 'Heavy-duty conveyor systems designed for harsh mining environments, handling coal, ore, and minerals with capacities up to 10,000 t/h.',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop',
      features: ['Long-distance transport', 'Steep angle capability', 'Harsh environment design'],
      href: '/solutions/mining',
      icon: '⛏️'
    },
    {
      title: 'Ports & Terminals',
      description: 'High-capacity material handling systems for efficient bulk cargo operations, ship loading/unloading, and stockyard management.',
      image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800&h=600&fit=crop',
      features: ['Ship loading systems', 'Stockyard management', 'Environmental protection'],
      href: '/solutions/ports',
      icon: '🚢'
    },
    {
      title: 'Power Generation',
      description: 'Reliable coal and ash handling systems ensuring continuous fuel supply and waste management for thermal power plants.',
      image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&h=600&fit=crop',
      features: ['Coal handling systems', 'Ash disposal solutions', 'FGD material handling'],
      href: '/solutions/power',
      icon: '⚡'
    },
    {
      title: 'Cement & Building Materials',
      description: 'Integrated conveyor solutions for every stage of cement production, from raw material to finished product handling.',
      image: 'https://images.unsplash.com/photo-1609557927087-f9d38ae2f32a?w=800&h=600&fit=crop',
      features: ['Heat-resistant design', 'Dust control systems', 'Process integration'],
      href: '/solutions/cement',
      icon: '🏗️'
    },
    {
      title: 'Coal & Chemical',
      description: 'Specialized safe handling systems for coal processing and chemical materials with explosion-proof and corrosion-resistant designs.',
      image: 'https://images.unsplash.com/photo-1547328415-88a17eeb89a9?w=800&h=600&fit=crop',
      features: ['Explosion-proof equipment', 'Sealed systems', 'Hazardous area certified'],
      href: '/solutions/chemical',
      icon: '🧪'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-section {
          opacity: 0;
        }

        .animate-section.animate-in {
          opacity: 1;
        }

        .animate-section.animate-in .fade-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-section.animate-in .fade-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-section.animate-in .fade-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-section.animate-in .scale-in {
          animation: scaleIn 0.8s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }

        .hover-lift {
          transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      <Header />
      
      <div className="pt-16">
        {/* Hero Section - 与 Research & Manufacturing 风格一致 */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=1920&h=800&fit=crop&q=80"
              alt="Industry Solutions"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/50"></div>
          </div>
          
          <div className={`relative z-10 text-center text-white max-w-4xl mx-auto px-4 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Industry Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Tailored bulk material handling solutions for every industry challenge
            </p>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-gray-50 animate-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "800+", label: "Projects Completed" },
                { value: "76", label: "Partner Enterprises" },
                { value: "19", label: "Countries Served" },
                { value: "30+", label: "Years Experience" }
              ].map((stat, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 text-center shadow-lg scale-in delay-${index + 1}00`}>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-white animate-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-up">Complete Solutions Across Industries</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6 fade-up delay-100"></div>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto fade-up delay-200">
                DLM delivers comprehensive material handling systems optimized for specific industry requirements
              </p>
            </div>

            <div className="space-y-20">
              {solutions.map((solution, index) => (
                <div key={index} className={`animate-section ${index % 2 === 0 ? '' : ''}`}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                  }`}>
                    {/* Content */}
                    <div className={`${index % 2 === 0 ? 'fade-left' : 'fade-right lg:col-start-2'}`}>
                      <div className="flex items-center mb-6">
                        <div className="text-5xl mr-4">{solution.icon}</div>
                        <h3 className="text-3xl font-bold text-gray-900">{solution.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        {solution.description}
                      </p>
                      
                      <div className="mb-8">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Solutions:</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link 
                        href={solution.href}
                        className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors group"
                      >
                        Explore {solution.title} Solutions
                        <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </div>

                    {/* Image */}
                    <div className={`relative ${index % 2 === 0 ? 'fade-right' : 'fade-left lg:col-start-1'}`}>
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
                        <img
                          src={solution.image}
                          alt={solution.title}
                          className="w-full h-[400px] object-cover transform hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose DLM */}
        <section className="py-20 bg-gray-50 animate-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-up">Why Industries Choose DLM</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto fade-up delay-100"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🛡️",
                  title: "Proven Reliability",
                  description: "Systems designed for 24/7 operation with minimal downtime and maximum efficiency."
                },
                {
                  icon: "🔧",
                  title: "Custom Engineering",
                  description: "Tailored solutions designed to meet specific industry requirements and site conditions."
                },
                {
                  icon: "🤝",
                  title: "Lifetime Support",
                  description: "Comprehensive service from initial design through installation and ongoing maintenance."
                }
              ].map((item, index) => (
                <div key={index} className={`text-center fade-up delay-${(index + 1) * 100}`}>
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 animate-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 fade-up">
              Find the Right Solution for Your Industry
            </h2>
            <p className="text-xl text-blue-100 mb-8 fade-up delay-100">
              Contact our industry experts to discuss your specific material handling challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up delay-200">
              <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors transform hover:scale-105">
                Get Expert Consultation
              </Link>
              <Link href="/products" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
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
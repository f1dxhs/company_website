'use client'

'use client'

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AboutPage() {
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

  const timeline = [
    {
      year: "1994",
      title: "Company Founded",
      description: "Founded by Collective Development Model",
      icon: "🏗️"
    },
    {
      year: "2004",
      title: "Quality Certification",
      description: "Achieved ISO 9001:2000 quality certification",
      icon: "✅"
    },
    {
      year: "2008",
      title: "Strategic Relocation",
      description: "Relocated and renamed as Sichuan Donglin Mining Machinery Co., Ltd.",
      icon: "📍"
    },
    {
      year: "2014",
      title: "Industry Recognition",
      description: "Sichuan Top 50 Manufacturing Enterprises",
      icon: "🏆"
    },
    {
      year: "2019",
      title: "R&D Expansion",
      description: "Established ChengDu R&D Center",
      icon: "🔬"
    },
    {
      year: "2021",
      title: "Brand Evolution",
      description: "Renamed as Sichuan Donglin Machinery Heavy Industry Tech Co., Ltd.",
      icon: "🚀"
    }
  ];

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
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes lineGrow {
          from {
            width: 0;
          }
          to {
            width: 100%;
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

        .animate-section.animate-in .timeline-line {
          animation: lineGrow 2s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }

        .hover-lift {
          transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .text-shadow-dark {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>

      <Header />
      
      <div className="pt-16">
        {/* Hero Section with Company Factory Image */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1581091870627-01a0e7b7ce85?w=1920&h=1080&fit=crop&q=80"
              alt="DLM Manufacturing Facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/70"></div>
          </div>
          
          <div className={`relative z-10 text-center text-white max-w-4xl mx-auto px-4 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-dark fade-up">
              About DLM Heavy Industry
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto fade-up delay-200">
              Expert of bulk material transportation - Forge ahead and pursue excellence
            </p>
          </div>
        </section>

        {/* Company Story with Worker Background */}
        <section className="relative py-20 animate-section">
          {/* Worker Background Image with Low Opacity */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&h=1080&fit=crop&q=80"
              alt="Workers in Manufacturing"
              className="w-full h-full object-cover opacity-5"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="fade-left">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Sichuan DLM Heavy Industry Tech Co., LTD is a professional manufacturer specializing in bulk material handling systems. Founded in 1994, we have grown from a collective economic development model to become an industry leader with over 30 years of experience.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  DLM specializes in bulk material handling, combining design, R&D, and manufacturing. We deliver reliable transport solutions across industries with durable installations, sustainable modules, and efficient service. Our innovative approach accelerates validation, cutting early-stage costs and maximizing ROI.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Today, we operate from our 66,000m² Technology R&D Center and 86,000m² manufacturing base, serving over 800 clients across 76 partner enterprises in 13 provinces and 19 international markets.
                </p>
              </div>
              
              <div className="relative fade-right">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80"
                    alt="DLM Headquarters and Manufacturing Facility"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Horizontal Timeline */}
        <section className="relative py-20 animate-section overflow-hidden" style={{
          background: 'linear-gradient(to bottom, #f9fafb, #ffffff)',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232563eb' fill-opacity='0.03'%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='90' cy='10' r='1'/%3E%3Ccircle cx='90' cy='90' r='1'/%3E%3Ccircle cx='10' cy='90' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center fade-up">Development Journey</h2>
            
            <div className="relative">
              {/* Timeline Container */}
              <div className="relative overflow-x-auto pb-8">
                <div className="min-w-[1200px] relative">
                  {/* Main Timeline Line */}
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2">
                    <div className="timeline-line absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
                  </div>

                  {/* Timeline Items */}
                  <div className="relative flex justify-between items-center pt-10 pb-10">
                    {timeline.map((item, index) => (
                      <div key={index} className={`flex flex-col items-center w-[200px] scale-in ${
                        index === 0 ? 'delay-100' : 
                        index === 1 ? 'delay-200' : 
                        index === 2 ? 'delay-300' : 
                        index === 3 ? 'delay-400' : 
                        index === 4 ? 'delay-500' : 
                        'delay-600'
                      }`}>
                        {/* Icon Circle */}
                        <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                          <span className="text-3xl">{item.icon}</span>
                        </div>
                        
                        {/* Connector Line */}
                        <div className="w-1 h-8 bg-blue-500"></div>
                        
                        {/* Content Card */}
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover-lift w-full">
                          <h3 className="text-2xl font-bold text-blue-600 mb-2">{item.year}</h3>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Capabilities with Enhanced Design */}
        <section className="py-20 bg-white animate-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-up">Our Capabilities</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6 fade-up delay-100"></div>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto fade-up delay-200">
                Comprehensive expertise across design, manufacturing, and service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: "R&D",
                  title: "Research & Development",
                  description: "66,000m² Technology R&D Center with advanced design capabilities and professional engineering team.",
                  image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop&q=80",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: "MFG",
                  title: "Manufacturing",
                  description: "86,000m² production base with annual capacity of 30,000 tons and advanced manufacturing equipment.",
                  image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=400&h=300&fit=crop&q=80",
                  color: "from-green-500 to-green-600"
                },
                {
                  icon: "QA",
                  title: "Quality Assurance",
                  description: "ISO 9001, ISO 14001, ISO 45001 certified with comprehensive quality control system.",
                  image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop&q=80",
                  color: "from-purple-500 to-purple-600"
                }
              ].map((capability, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden hover-lift fade-up ${
                  index === 0 ? 'delay-100' : 
                  index === 1 ? 'delay-200' : 
                  'delay-300'
                }`}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={capability.image}
                      alt={capability.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-80`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">{capability.icon}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{capability.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Statistics with Animation */}
        <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 animate-section">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&h=800&fit=crop&q=80"
              alt="Industrial Background"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "30+", label: "Years Experience" },
                { value: "500+", label: "Employees" },
                { value: "800+", label: "Satisfied Clients" },
                { value: "19", label: "Countries Served" }
              ].map((stat, index) => (
                <div key={index} className={`text-center scale-in ${
                  index === 0 ? 'delay-100' : 
                  index === 1 ? 'delay-200' : 
                  index === 2 ? 'delay-300' : 
                  'delay-400'
                }`}>
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-3">
                    {stat.value}
                  </div>
                  <p className="text-gray-300 text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
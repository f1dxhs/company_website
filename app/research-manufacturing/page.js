'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ChevronRight } from 'lucide-react'

export default function ResearchManufacturingPage() {
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

  const universities = [
    {
      name: "Southwest Jiaotong University",
      description: "Joint research on advanced conveyor belt technologies and material handling systems",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
      specialties: ["Belt Conveyor Dynamics", "Material Flow Analysis", "System Optimization"]
    },
    {
      name: "Sichuan University",
      description: "Collaborative development of eco-friendly bulk material handling solutions",
      logo: "https://images.unsplash.com/photo-1607013407627-6ee814329547?w=400&h=300&fit=crop",
      specialties: ["Environmental Engineering", "Dust Control Technology", "Energy Efficiency"]
    },
    {
      name: "University of Electronic Science and Technology",
      description: "Partnership in intelligent control systems and automation technologies",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      specialties: ["Automation Systems", "IoT Integration", "Remote Monitoring"]
    }
  ];

  const manufacturingDevices = [
    {
      name: "CNC Machining Centers",
      description: "High-precision 5-axis CNC machines for complex component manufacturing",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=600&fit=crop"
    },
    {
      name: "Laser Cutting Systems",
      description: "Advanced fiber laser cutting technology for precise metal fabrication",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    },
    {
      name: "Welding Robots",
      description: "Automated welding systems ensuring consistent quality and efficiency",
      image: "https://images.unsplash.com/photo-1581091870622-1c0a0f045e9f?w=800&h=600&fit=crop"
    },
    {
      name: "Assembly Lines",
      description: "Modern assembly facilities with quality control at every stage",
      image: "https://images.unsplash.com/photo-1565186092539-acfeb6e14784?w=800&h=600&fit=crop"
    },
    {
      name: "Testing Equipment",
      description: "Comprehensive testing facilities for performance validation",
      image: "https://images.unsplash.com/photo-1581092160607-ee22c0c8c424?w=800&h=600&fit=crop"
    },
    {
      name: "Heavy Lifting Equipment",
      description: "Large-capacity cranes and handling equipment for heavy components",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop"
    }
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System Certification",
      icon: "✅"
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management System Certification",
      icon: "🌿"
    },
    {
      name: "ISO 45001:2018",
      description: "Occupational Health and Safety Management System",
      icon: "🛡️"
    },
    {
      name: "CE Certification",
      description: "European Conformity for Machinery Safety",
      icon: "🇪🇺"
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
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=800&fit=crop&q=80"
              alt="Research & Manufacturing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/50"></div>
          </div>
          
          <div className={`relative z-10 text-center text-white max-w-4xl mx-auto px-4 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Research & Manufacturing Ability
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Combining academic excellence with advanced manufacturing capabilities
            </p>
          </div>
        </section>

        {/* Cooperative Laboratory Section */}
        <section id="cooperative-laboratory" className="py-20 bg-white animate-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-up">Cooperative Laboratory</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6 fade-up delay-100"></div>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto fade-up delay-200">
                Strategic partnerships with leading universities drive our innovation forward
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {universities.map((uni, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-xl p-8 hover-lift fade-up delay-${(index + 1) * 100}`}>
                  <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                    <img
                      src={uni.logo}
                      alt={uni.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{uni.name}</h3>
                  <p className="text-gray-600 mb-6">{uni.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Research Focus:</h4>
                    <ul className="space-y-1">
                      {uni.specialties.map((specialty, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{specialty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scientific Research Team Section */}
        <section id="research-team" className="py-20 bg-gray-50 animate-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-up">Scientific Research Team</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6 fade-up delay-100"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Excellence in Engineering Innovation
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Our research team consists of over 50 experienced engineers and researchers, including 15 senior engineers and 8 Ph.D. holders. The team specializes in mechanical design, automation control, material science, and environmental engineering.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                    <p className="text-gray-600">Research Staff</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                    <p className="text-gray-600">Senior Engineers</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                    <p className="text-gray-600">Ph.D. Holders</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                    <p className="text-gray-600">Patents</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900">Core Competencies:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Advanced conveyor system design and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Environmental protection technology development</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Intelligent control system integration</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Material handling efficiency improvement</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative fade-right">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
                  alt="Research Team"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Devices Section */}
        <section id="manufacturing-devices" className="py-20 bg-white animate-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-up">Manufacturing Devices</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6 fade-up delay-100"></div>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto fade-up delay-200">
                State-of-the-art equipment ensuring precision and quality in every product
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {manufacturingDevices.map((device, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden hover-lift fade-up delay-${(index % 3 + 1) * 100}`}>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={device.image}
                      alt={device.name}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{device.name}</h3>
                    <p className="text-gray-600">{device.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance Section */}
        <section id="quality-assurance" className="py-20 bg-gray-50 animate-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-up">Quality Assurance</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6 fade-up delay-100"></div>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto fade-up delay-200">
                Internationally recognized certifications ensuring the highest quality standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className={`bg-white rounded-2xl p-8 text-center shadow-xl hover-lift fade-up delay-${(index + 1) * 100}`}>
                  <div className="text-6xl mb-4">{cert.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 fade-up delay-400">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Commitment to Excellence
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our quality management system ensures that every product meets or exceeds international standards. From raw material selection to final testing, we maintain strict quality control at every stage of the manufacturing process.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">100% inspection of critical components</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Regular third-party audits and assessments</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Continuous improvement programs</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Comprehensive documentation and traceability</span>
                    </li>
                  </ul>
                </div>
                
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                    alt="Quality Control"
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 animate-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 fade-up">
              Partner with Excellence
            </h2>
            <p className="text-xl text-blue-100 mb-8 fade-up delay-100">
              Experience the difference that advanced research and manufacturing capabilities make
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up delay-200">
              <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors transform hover:scale-105">
                Contact Us
              </Link>
              <Link href="/products" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
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
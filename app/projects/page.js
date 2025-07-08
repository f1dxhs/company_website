'use client'

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function ProjectsPage() {
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

  const projects = [
    {
      id: 1,
      title: 'Chongqing Fuling Longqiao Power Plant',
      subtitle: 'Φ500mm Tubular Belt Conveyor System',
      location: 'Chongqing, China',
      industry: 'Power Generation',
      description: 'A state-of-the-art tubular belt conveyor system designed for the Fuling Longqiao Power Plant. This project features advanced dust-free transportation technology with a capacity of 1800t/h and belt speed of 4.2m/s, ensuring efficient and environmentally friendly coal handling.',
      keyFeatures: [
        'Belt Speed: 4.2m/s',
        'Capacity: 1800t/h',
        'Diameter: Φ500mm',
        'Dust-free operation',
        'Energy efficient design'
      ],
      image: 'projects/chongqing-power-plant.jpg' // 请将您的图片放在 public/projects/ 文件夹中
    },
    {
      id: 2,
      title: 'Golmud Salt Lake',
      subtitle: '16KM Long-Distance Belt Conveyor',
      location: 'Qinghai, China',
      industry: 'Mining & Minerals',
      description: 'One of the longest single-flight conveyor systems in China, stretching 16 kilometers across the challenging terrain of Qinghai Province. This project demonstrates DLM\'s capability in executing mega-scale material handling solutions with a 50-year service life design.',
      keyFeatures: [
        'Total Length: 16km',
        'Design Life: 50 years',
        'Harsh environment resistant',
        'Minimal maintenance design',
        'Remote monitoring system'
      ],
      image: 'projects/golmud-salt-lake.jpg' // 请将您的图片放在 public/projects/ 文件夹中
    },
    {
      id: 3,
      title: 'Xinjiang Qinghua Coal Mine',
      subtitle: 'CBMEPTS Transfer Point Upgrade',
      location: 'Xinjiang, China',
      industry: 'Coal & Chemical',
      description: 'Revolutionary controlled bulk material transfer system implementation at Qinghua Coal Mine. The CBMEPTS technology significantly reduced dust emissions and energy consumption while increasing transfer efficiency by 40%.',
      keyFeatures: [
        'Dust reduction: 95%',
        'Energy saving: 40%',
        'Noise reduction: 20dB',
        'Zero spillage design',
        'Automated control system'
      ],
      image: 'projects/xinjiang-coal-mine.jpg' // 请将您的图片放在 public/projects/ 文件夹中
    },
    {
      id: 4,
      title: 'Kunming Steel Relocation',
      subtitle: 'Smart Environmental Mobile Stacker',
      location: 'Yunnan, China',
      industry: 'Steel & Metals',
      description: 'An innovative C-type smart mobile stacker system designed for Kunming Steel\'s massive relocation project. This eco-friendly solution features intelligent automation and environmental protection systems, setting new standards in steel industry material handling.',
      keyFeatures: [
        'C-type cantilever design',
        'Smart automation system',
        'Eco-friendly operation',
        'Flexible mobility',
        'Real-time monitoring'
      ],
      image: 'projects/kunming-steel.jpg' // 请将您的图片放在 public/projects/ 文件夹中
    },
    {
      id: 5,
      title: 'Kyrgyzstan Mining Project',
      subtitle: '9.8KM Cross-Border Belt Conveyor',
      location: 'Kyrgyzstan',
      industry: 'International Mining',
      description: 'DLM\'s first major international project featuring a 9.8km belt conveyor system crossing challenging mountainous terrain. This project showcases our global capabilities and expertise in handling complex international logistics and engineering challenges.',
      keyFeatures: [
        'Length: 9.8km',
        'Elevation change: 800m',
        'International standards',
        'Extreme weather resistant',
        'Multi-language support system'
      ],
      image: 'projects/kyrgyzstan-mining.jpg' // 请将您的图片放在 public/projects/ 文件夹中
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

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>

      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=800&fit=crop&q=80"
              alt="Industrial Projects"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/50"></div>
          </div>
          
          <div className={`relative z-10 text-center text-white max-w-4xl mx-auto px-4 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-up">
              Featured Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto fade-up delay-200">
              Showcasing DLM's expertise through landmark projects that demonstrate our innovation and engineering excellence
            </p>
          </div>
        </section>

        {/* Projects List */}
        <section className="py-20">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`animate-section ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}>
                  {/* Image Section */}
                  <div className={`relative overflow-hidden rounded-2xl shadow-2xl ${
                    index % 2 === 0 ? 'fade-left' : 'lg:order-2 fade-right'
                  }`}>
                    <div className="relative h-[400px] bg-gray-200">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover z-10"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      {/* Placeholder when image is missing */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500 text-center p-4">
                        <div>
                          <p className="text-lg font-medium mb-2">项目实景图</p>
                          <p className="text-sm">{project.image}</p>
                          <p className="text-xs mt-2">请将图片放置在对应路径</p>
                        </div>
                      </div>
                    </div>
                    {/* Project Industry Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {project.industry}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`${
                    index % 2 === 0 ? 'fade-right' : 'lg:order-1 fade-left'
                  }`}>
                    <div className="mb-6">
                      <h2 className="text-4xl font-bold text-gray-900 mb-3">
                        {project.title}
                      </h2>
                      <h3 className="text-xl text-blue-600 font-semibold mb-2">
                        {project.subtitle}
                      </h3>
                      <p className="text-gray-600 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {project.location}
                      </p>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.keyFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Industries Served */}
        <section className="py-16 bg-white animate-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center fade-up">Industries We Serve</h2>
            
            <div className="flex flex-wrap justify-center gap-4 fade-up delay-200">
              {['Mining', 'Power Generation', 'Ports & Terminals', 'Cement', 'Steel', 'Chemical', 'Coal'].map((industry) => (
                <div key={industry} className="bg-gray-100 hover:bg-blue-100 px-6 py-3 rounded-full transition-colors duration-300">
                  <span className="text-gray-700 font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 animate-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 fade-up">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 fade-up delay-100">
              Let's discuss how DLM can deliver the perfect solution for your material handling needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up delay-200">
              <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors transform hover:scale-105">
                Get Started
              </Link>
              <Link href="/solutions" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
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
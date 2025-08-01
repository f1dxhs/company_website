'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X, ChevronRight, Mail, Phone, MapPin } from 'lucide-react'
import Header from './Header'
import Footer from './Footer'

// Animated counter hook - 必须在组件外部或组件顶层定义
const useCounter = (end, duration = 2000, started) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!started) return;
    
    let startTime = null;
    const startValue = 0;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, started]);
  
  return count;
};

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [aboutCountersStarted, setAboutCountersStarted] = useState(false);
  const aboutRef = useRef(null);
  
  // Counter values - 现在可以正确使用 useCounter 了
  const yearsCounter = useCounter(30, 2000, aboutCountersStarted);
  const factoryCounter = useCounter(66000, 2000, aboutCountersStarted);
  const employeesCounter = useCounter(500, 2000, aboutCountersStarted);
  const clientsCounter = useCounter(800, 2000, aboutCountersStarted);

  // 配置化的统计数据
  const statsConfig = [
    { 
      value: yearsCounter, 
      suffix: " +", 
      label: "Years of Experience", 
      delay: "delay-100" 
    },
    { 
      value: factoryCounter.toLocaleString(), 
      suffix: " m²", 
      label: "Factory Area", 
      delay: "delay-200" 
    },
    { 
      value: employeesCounter, 
      suffix: " +", 
      label: "Employees", 
      delay: "delay-300" 
    },
    { 
      value: clientsCounter, 
      suffix: " +", 
      label: "Satisfied Clients", 
      delay: "delay-400" 
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    // Intersection Observer for about counter animation
    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !aboutCountersStarted) {
            setAboutCountersStarted(true);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    if (aboutRef.current) {
      aboutObserver.observe(aboutRef.current);
    }
    
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
    
    // Observe all sections
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      if (aboutRef.current) {
        aboutObserver.unobserve(aboutRef.current);
      }
    };
  }, [aboutCountersStarted]);

  const featuredProducts = [
    {
      code: "DTII/DTII(A) Series",
      name: "Belt Conveyor Systems",
      description: "Universal fixed belt conveyor with advanced design for reliable bulk material transportation.",
      image: "/images/products/dtii_belt_conveyor.jpg",
      slug: "belt-conveyor"
    },
    {
      code: "Pipe", 
      name: "Pipe Belt Conveyor",
      description: "Environmentally friendly enclosed design for dust-free material transport.",
      image: "/images/products/pipe_belt_conveyor.jpg",
      slug: "pipe-belt-conveyor"
    },
    {
      code: "Overland and Curved",
      name: "Overland and horizontal Curved Conveyor",
      description: "Best solution for long-distance and complex terrain transport.",
      image: "/images/products/overland.jpg",
      slug: "overland"
    },
    {
      code: "CBMEPTS",
      name: "Controlled Bulk Material Transfer System",
      description: "Eco-friendly transfer system with minimal dust emission and energy efficiency.",
      image: "/images/products/cbmepts.png",
      slug: "cbmepts"
    }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .parallax-bg {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .hover-lift {
          transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .gradient-overlay {
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.95) 0%, rgba(59, 130, 246, 0.85) 100%);
        }

        .text-shadow-dark {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>

      <Header />
      
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/industrial-conveyor-system.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        {/* Static Image Fallback */}
        <div className="absolute inset-0 z-0">
          <img
            // src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&h=1080&fit=crop"
            src = '/images/homepage/homepage_1.jpg'
            alt="DLM Heavy Industry Bulk Material Handling Systems"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        <div className={`relative z-10 text-center text-white max-w-5xl mx-auto px-4 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-shadow-dark">
            <span className="block fade-up">DongLin Machinery</span>
            <span className="block text-blue-300 mt-3 fade-up delay-200">HEAVY INDUSTRY</span>
            <span className="block text-3xl md:text-5xl mt-4 fade-up delay-300">BULK MATERIAL HANDLING</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto leading-relaxed fade-up delay-400">
            Leading manufacturer of bulk material handling systems with 30+ years of experience. 
            Delivering reliable transport solutions across industries worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up delay-600">
            <button 
              onClick={() => scrollToSection('about')} 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Discover Our Story
            </button>
            <button 
              onClick={() => scrollToSection('products')} 
              className="border-2 border-white/80 text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 backdrop-blur-sm"
            >
              Explore Solutions
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white opacity-70" />
        </div>
      </section>

      {/* Company Overview with Parallax Background */}
      <section id="about" className="relative py-24 animate-section bg-gray-50">
        {/* Background Image */}
        <div 
          className="absolute inset-0 parallax-bg opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop")',
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 fade-up">About DLM</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto fade-up delay-100"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="fade-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Expert of Bulk Material Transportation
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Sichuan DLM Heavy Industry Tech Co., LTD is a professional manufacturer specializing in bulk material handling systems. With over 30 years of industry experience and an annual production capacity of 30,000 tons, DLM provides customers with optimal material handling solutions.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Our innovative approach accelerates validation, cutting early-stage costs and maximizing ROI. We deliver reliable transport solutions across industries with durable installations, sustainable modules, and efficient service.
              </p>
              <Link href="/about" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg group">
                Learn More About Us
                <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="relative fade-right">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
                <img
                  src="/images/homepage/manufacturing_devices.jpg"
                  alt="DLM Manufacturing Facility"
                  className="w-full transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Key Statistics with Animation - 使用配置化的数据 */}
          <div ref={aboutRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsConfig.map((stat, index) => (
              <div key={index} className={`text-center scale-in ${stat.delay}`}>
                <div className="text-5xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-4xl font-normal text-blue-600 opacity-80">{stat.suffix}</span>
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section with Subtle Background */}
      <section id="products" className="relative py-24 animate-section bg-gray-100">
      <div className="absolute inset-0 z-0">
          <img
            // src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&h=1080&fit=crop"
            src = '/images/ban_business01.jpg'
            alt="DLM Heavy Industry Bulk Material Handling Systems"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 fade-up">Featured Products</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 fade-up delay-100"></div>
            <p className="text-gray-200 text-xl max-w-3xl mx-auto fade-up delay-200">
              Our comprehensive range of bulk material handling equipment meets the diverse needs of various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {featuredProducts.map((product, index) => (
              <div 
                key={index} 
                className={`bg-white/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover-lift fade-up ${index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : index === 2 ? 'delay-300' : 'delay-400'}`}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {product.code}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {product.description}
                  </p>
                  
                  <Link 
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg group"
                  >
                    Learn More
                    <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center fade-up delay-600">
            <Link href="/products" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center">
              View All Products
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

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

      {/* Research & Manufacturing Ability Section */}
      <section className="relative py-24 animate-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 fade-up">Research & Manufacturing Ability</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6 fade-up delay-100"></div>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto fade-up delay-200">
              Advanced research capabilities and state-of-the-art manufacturing facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cooperative Laboratory",
                description: "Strategic partnerships with leading universities for cutting-edge research",
                image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop",
                link: "/research-manufacturing#cooperative-laboratory",
                icon: "🔬"
              },
              {
                title: "Scientific Research Team",
                description: "Expert team of engineers and researchers driving innovation",
                image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
                link: "/research-manufacturing#research-team",
                icon: "👨‍🔬"
              },
              {
                title: "Manufacturing Devices",
                description: "Advanced machinery and equipment for precision manufacturing",
                image: "/images/homepage/manufacturing_devices.jpg",
                link: "/research-manufacturing#manufacturing-devices",
                icon: "🏭"
              }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`group relative overflow-hidden rounded-2xl shadow-xl hover-lift fade-up ${
                  index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300'
                }`}
              >
                <div className="relative h-80">
                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-3 text-shadow-dark">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Hover Effect */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center text-white font-medium">
                        Learn More
                        <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
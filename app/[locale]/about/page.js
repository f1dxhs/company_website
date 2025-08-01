'use client'

import React, { useEffect, useState, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Animated counter hook - 必须在组件外部定义
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

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [countersStarted, setCountersStarted] = useState(false);
  const heroRef = useRef(null);

  // Counter values
  const experience = useCounter(30, 2000, countersStarted);
  const capacity = useCounter(50000, 2000, countersStarted);
  const area = useCounter(66000, 2000, countersStarted);
  const clients = useCounter(800, 2000, countersStarted);

  // 配置化的统计数据
  const heroStatsConfig = [
    { 
      value: experience, 
      unit: "Years", 
      label: "Experience",
      mainTextClass: "text-5xl md:text-6xl font-normal",
      unitClass: "text-2xl md:text-2xl font-light"
    },
    { 
      value: capacity.toFixed(0), 
      unit: "Tons", 
      label: "Capacity",
      mainTextClass: "text-5xl md:text-6xl font-normal",
      unitClass: "text-2xl md:text-2xl font-light"
    },
    { 
      value: area.toLocaleString(), 
      unit: "m²", 
      label: "Factory Area",
      mainTextClass: "text-5xl md:text-6xl font-normal",
      unitClass: "text-2xl md:text-2xl font-light"
    },
    { 
      value: clients, 
      unit: "+", 
      label: "Satisfied Clients",
      mainTextClass: "text-5xl md:text-6xl font-normal",
      unitClass: "text-2xl md:text-2xl font-light"
    }
  ];

  useEffect(() => {
    setIsLoaded(true);

    // Intersection Observer for hero counter animation
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersStarted) {
            setCountersStarted(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
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

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      if (heroRef.current) {
        heroObserver.unobserve(heroRef.current);
      }
    };
  }, [countersStarted]);

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
        .delay-600 { animation-delay: 0.6s; }

        .hover-lift {
          transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        /* Timeline scrollbar styling */
        .timeline-scroll::-webkit-scrollbar {
          height: 4px;
        }

        .timeline-scroll::-webkit-scrollbar-track {
          background: #e5e7eb;
          border-radius: 2px;
        }

        .timeline-scroll::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 2px;
        }

        .timeline-scroll::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }

        /* Timeline item hover effect */
        .timeline-item {
          transition: all 0.3s ease;
        }

        .timeline-item:hover .timeline-dot {
          transform: scale(1.2);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }

        .timeline-item:hover .timeline-content {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <Header />
      
      <div className="pt-16">
        {/* Hero Section with Animated Counters */}
        <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src='/images/ban_business01.jpg'
              alt="DLM Manufacturing Facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80"></div>
          </div>
          
          <div className={`relative z-10 w-full max-w-7xl mx-auto px-4 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-20 text-white">
              {heroStatsConfig.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={stat.mainTextClass + " mb-2"}>
                    {stat.value} <span className={stat.unitClass}>{stat.unit}</span>
                  </div>
                  <p className="text-lg md:text-xl font-light">{stat.label}</p>
                </div>
              ))}
            </div>
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

        {/* Enhanced Timeline Section */}
        <section className="py-20 bg-gray-900 animate-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-16 text-center fade-up">Development Journey</h2>
            
            {/* Horizontal Scrollable Timeline */}
            <div className="relative">
              <div className="timeline-scroll overflow-x-auto pb-6">
                <div className="flex space-x-8 md:space-x-16 min-w-max px-4">
                  {timeline.map((item, index) => (
                    <div key={index} className="timeline-item flex flex-col items-center w-64">
                      {/* Year and Icon */}
                      <div className="relative">
                        <div className="timeline-dot w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-3xl shadow-lg">
                          {item.icon}
                        </div>
                        {/* Connecting line */}
                        {index < timeline.length - 1 && (
                          <div className="absolute top-10 left-20 w-16 md:w-32 h-0.5 bg-blue-500/30"></div>
                        )}
                      </div>
                      
                      {/* Year */}
                      <div className="mt-4 text-3xl font-bold text-blue-400">
                        {item.year}
                      </div>
                      
                      {/* Content */}
                      <div className="timeline-content mt-4 bg-gray-800 rounded-lg p-6 w-full">
                        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Scroll Indicator */}
              <div className="flex justify-center mt-4">
                <p className="text-gray-500 text-sm flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                  Scroll to explore more
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-20 bg-white animate-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center fade-up">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center fade-up delay-100">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Excellence</h3>
                <p className="text-gray-600">Committed to delivering the highest quality products and services to our clients worldwide.</p>
              </div>
              <div className="text-center fade-up delay-200">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">Continuously advancing technology and solutions to meet evolving industry needs.</p>
              </div>
              <div className="text-center fade-up delay-300">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Focus</h3>
                <p className="text-gray-600">Building lasting partnerships through exceptional service and tailored solutions.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
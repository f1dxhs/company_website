'use client'

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function ProductsPage() {
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

  const products = [
    {
      code: "DTII_DTII(A)",
      name: "DTII/DTII(A) Belt Conveyor",
      image: "/images/products/dtii_belt_conveyor.jpg",
      slug: "belt-conveyor"
    },
    {
      code: "Pipe",
      name: "Pipe Belt Conveyor",
      image: "/images/products/pipe_belt_conveyor.jpg",
      slug: "pipe-belt-conveyor"
    },
    {
      code: "DJ Series",
      name: "DJ Series Large-Angle Corrugated Sidewall Belt Conveyor",
      image: "/images/products/DJ_series.jpg",
      slug: "large-angle-conveyor"
    },
    {
      code: "TDG/THG",
      name: "The TDG and THG Bucket Elevators",
      image: "/images/products/Bucket_elevator.jpg",
      slug: "bucket-elevator"
    },
    {
      code: "Double Surface",
      name: "Double Work Surface Belt Conveyor",
      image: "/images/products/double_surface_conveyor.jpg",
      slug: "double-surface-conveyor"
    },
    {
      code: "Overland",
      name: "Long-Distance Overland Belt Conveyor System",
      image: "/images/products/overland.jpg",
      slug: "overland"
    },
    {
      code: "Tunnel",
      name: "Tunnel Boring Continuous Conveyor System",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
      slug: "tunnel-boring"
    },
    {
      code: "CBMEPTS",
      name: "Controlled Bulk Material Transfer System",
      image: "/images/products/cbmepts.png",
      slug: "cbmepts"
    },
    {
      code: "Accessories",
      name: "Conveyor Accessories",
      image: "/images/products/pulley.png",
      slug: "accessories"
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
      `}</style>

      <Header />
      
      <div className="pt-16">
        {/* Hero Section - 与 Research & Manufacturing 风格一致 */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&h=800&fit=crop&q=80"
              alt="DLM Products"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/50"></div>
          </div>
          
          <div className={`relative z-10 text-center text-white max-w-4xl mx-auto px-4 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Comprehensive range of bulk material handling systems for every industry need
            </p>
          </div>
        </section>

        {/* Products Grid - 简化版，只显示名称 */}
        <section className="py-20 bg-white animate-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-up">Product Portfolio</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto fade-up delay-100"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Link
                  key={index}
                  href={`/products/${product.slug}`}
                  className={`group bg-white rounded-2xl shadow-xl overflow-hidden hover-lift fade-up delay-${(index % 3 + 1) * 100}`}
                >
                  <div className="relative h-64">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        {product.code}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 animate-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 fade-up">
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-blue-100 mb-8 fade-up delay-100">
              Our technical team can design and manufacture customized conveyor systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up delay-200">
              <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors transform hover:scale-105">
                Contact Technical Team
              </Link>
              <Link href="/solutions" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                View Industry Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
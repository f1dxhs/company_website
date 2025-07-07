'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to discuss your bulk material handling requirements? Get in touch with our technical experts.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <Mail className="text-blue-600 mt-1 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">info@dlm-hic.com</p>
                      <p className="text-gray-600">sales@dlm-hic.com</p>
                      <p className="text-gray-600">technical@dlm-hic.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-blue-600 mt-1 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-600">+86 28 XXXX XXXX (Main Office)</p>
                      <p className="text-gray-600">+86 28 XXXX XXXX (Technical Support)</p>
                      <p className="text-gray-600">+86 28 XXXX XXXX (Sales)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="text-blue-600 mt-1 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-600">
                        Sichuan DLM Heavy Industry Tech Co., LTD<br />
                        [Industrial Park Address]<br />
                        Sichuan Province<br />
                        China
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium">Monday - Friday:</span> 8:00 AM - 6:00 PM (CST)</p>
                    <p><span className="font-medium">Saturday:</span> 9:00 AM - 12:00 PM (CST)</p>
                    <p><span className="font-medium">Sunday:</span> Closed</p>
                  </div>
                </div>

                <div className="mt-8">
                  <img
                    src="map/dlm-factory-location-sichuan-china"
                    alt="DLM Factory Location Map"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="+86 XXXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors">
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="technical-consultation">Technical Consultation</option>
                      <option value="quotation">Quotation Request</option>
                      <option value="after-sales">After-sales Service</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors">
                      <option value="">Select your industry</option>
                      <option value="mining">Mining & Minerals</option>
                      <option value="ports">Ports & Terminals</option>
                      <option value="power">Power Generation</option>
                      <option value="cement">Cement & Building Materials</option>
                      <option value="chemical">Coal & Chemical</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea 
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      placeholder="Please tell us about your project requirements, material type, capacity needs, conveying distance, or any specific questions you may have..."
                    ></textarea>
                  </div>
                  
                  <button 
                    onClick={() => alert('Thank you for your interest! In a real implementation, this would submit the form to your backend.')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Send Message
                  </button>

                  <p className="text-sm text-gray-500">
                    * Required fields. We typically respond within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
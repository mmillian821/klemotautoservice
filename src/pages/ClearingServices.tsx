import React from 'react';
import { Ship, CheckCircle, Phone, Mail, MessageCircle, Package, Truck, Container } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const ClearingServices = () => {
  return <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Ship className="w-16 h-16 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Custom Licensed Agency at Tincan Island Port</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">At Klemot Auto Service LTD, we don't just sell cars — we help you import them too. We are Licensed Freight Forwarders, Certified and Trusted to Handle your Consignment.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🚢 Custom Licensed Agency – We Clear Cars & Containers!
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I am a Customs Licensed Clearing Agent with years of experience clearing cars, trucks, 
              and containers at Tincan Island Port, Apapa. Whether you're importing a single car or 
              a full container, I offer fast, professional, and reliable clearing services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Car Clearing</h3>
              <p className="text-gray-600">Professional clearing for all types of vehicles</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Truck className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Truck Clearing</h3>
              <p className="text-gray-600">Specialized clearing for commercial vehicles</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Container className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Container Clearing</h3>
              <p className="text-gray-600">Complete container clearance services</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Package className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Port Logistics Advisory</h3>
              <p className="text-gray-600">Expert guidance through port procedures</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-blue-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Clearing Services?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">📦 Fully Licensed Agency with Proper Certification</h4>
                  <p className="text-gray-600">Fully licensed customs clearing agent with proper certification</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">🚗 Cars, Trucks & Containers</h4>
                  <p className="text-gray-600">Experience with all types of vehicle and cargo clearing</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">🚢 Tincan Island Port, Apapa</h4>
                  <p className="text-gray-600">Direct access and expertise at Nigeria's major port</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">📲 Clear with Me on WhatsApp</h4>
                  <p className="text-gray-600">Easy communication and updates throughout the process</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Clearing Process</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              With full access to Tincan Island Port, Apapa, I ensure your cargo is handled quickly and 
              professionally, with zero stress. From documentation to final delivery, we manage every step 
              of the clearing process.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Clear Your Cargo?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Us today for fast, professional, and reliable clearing services at Tincan Island Port.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="tel:+2348067657616" className="flex items-center space-x-3 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              <Phone className="w-5 h-5" />
              <span>📞 Call: +2348067657616</span>
            </a>
            
            <a href="https://wa.me/2348067657616" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>📲 WhatsApp: +2348067657616</span>
            </a>
            
            <a href="mailto:Klemotors87@gmail.com" className="flex items-center space-x-3 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              <Mail className="w-5 h-5" />
              <span>📧 Email: Klemotors87@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default ClearingServices;
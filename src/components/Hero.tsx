
import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Car Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('/lovable-uploads/bb91a39f-b411-4b18-8a91-6d93de136864.png')`
        }}
      ></div>
      
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Trusted Cars & 
            <span className="text-green-400 block">Auto Service</span>
            <span className="text-gray-300 text-4xl md:text-5xl block mt-2">in Lagos</span>
          </h1>
          
          <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Klemot Auto Service LTD – Quality Vehicles, Exceptional Service.
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            We specialize in quality car sales and trusted auto services in the heart of Lagos. 
            Visit us today to experience automotive excellence.
          </p>
          
          {/* Clearing Services Highlight */}
          <div className="bg-blue-900/50 backdrop-blur-sm border border-blue-400/30 rounded-lg p-6 mb-8 max-w-3xl mx-auto">
            <p className="text-blue-200 text-lg mb-2">
              🚢 <strong>NEW:</strong> Licensed Custom Agency
            </p>
          <p className="text-gray-300">
            We also offer professional car and container clearing at Tincan Island Port, Apapa. 
            <Link to="/clearing-services" className="text-green-400 hover:text-green-300 underline ml-1">
              Learn more →
            </Link>
          </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://wa.me/2348067657616"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
              </svg>
              Contact Us on WhatsApp
            </a>
            
            <a 
              href="tel:+2348067657616"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-3"
            >
              <Phone size={24} />
              Call Now
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

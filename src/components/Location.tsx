
import React from 'react';
import { MapPin } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Visit Our Location
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Conveniently located in the heart of Ikeja, Lagos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Our Address</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Ile-zik bus stop<br />
                    Ikeja, Lagos<br />
                    Nigeria
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://maps.app.goo.gl/1eY31EJzuN7w7qwM7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MapPin size={24} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4!2d3.3419!3d6.6025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zS0xNIDE5IElsZS16aWsgYnVzIHN0b3AsIElrZWphLCBMYWdvcw!5e0!3m2!1sen!2sng!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Klemot Auto Service LTD Location"
                className="rounded-2xl"
              ></iframe>
            </div>
            
            {/* Overlay for better visual appeal */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

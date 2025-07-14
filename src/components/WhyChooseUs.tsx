import React from 'react';
import { CheckCircle, Star, Users, ThumbsUp } from 'lucide-react';
const WhyChooseUs = () => {
  const reasons = [{
    icon: CheckCircle,
    title: "Quality Guarantee",
    description: "Every vehicle undergoes rigorous inspection to ensure top quality and reliability."
  }, {
    icon: Star,
    title: "5-Star Service",
    description: "Consistently rated 5 stars by our satisfied customers across Lagos."
  }, {
    icon: Users,
    title: "Trusted by 100+ Customers",
    description: "A growing community of happy customers who trust us with their automotive needs."
  }, {
    icon: ThumbsUp,
    title: "Honest & Transparent",
    description: "No hidden fees, no surprises. We believe in honest business practices."
  }];
  return <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Klemot Auto Service?
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We're more than just a car dealership. We're your trusted automotive partner in Lagos and anywhere in Nigeria.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {reasons.map((reason, index) => <div key={index} className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>)}
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Our Promise to You
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Quality vehicles at fair prices</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Professional and reliable service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Transparent business practices</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Customer satisfaction guaranteed</span>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <a href="https://wa.me/2348067657616" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Experience the Difference
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyChooseUs;
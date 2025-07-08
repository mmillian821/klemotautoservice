import React from 'react';
import { Car, Wrench, Shield, DollarSign, Clock, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Quality Car Sales",
      description: "Wide selection of thoroughly inspected vehicles from trusted brands like Toyota and Mercedes-Benz."
    },
    {
      icon: Wrench,
      title: "Auto Repair Services",
      description: "Complete automotive repair and maintenance services by certified mechanics."
    },
    {
      icon: Shield,
      title: "Vehicle Inspection",
      description: "Comprehensive pre-purchase inspections to ensure you get the best value for your money."
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Fair and transparent pricing on all our vehicles and services with no hidden fees."
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "Fast turnaround times for repairs and maintenance to get you back on the road quickly."
    },
    {
      icon: Award,
      title: "Trusted Expertise",
      description: "Years of experience in the automotive industry serving the Lagos community."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From quality car sales to reliable auto services, we provide comprehensive automotive solutions for all your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:bg-green-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="tel:+2348067657616"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Car size={24} />
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Adebayo Johnson",
      location: "Ikeja, Lagos",
      rating: 5,
      text: "Excellent service! I bought my Toyota Camry from Klemot Auto Service and the experience was fantastic. Professional staff and quality vehicles. Highly recommended!",
      avatar: "AJ"
    },
    {
      id: 2,
      name: "Funmi Okafor",
      location: "Victoria Island, Lagos",
      rating: 5,
      text: "Very trustworthy dealership. They helped me find the perfect Mercedes-Benz and provided excellent after-sales service. The team is knowledgeable and friendly.",
      avatar: "FO"
    },
    {
      id: 3,
      name: "Emeka Nwankwo",
      location: "Lekki, Lagos",
      rating: 5,
      text: "Best auto service in Lagos! Quick repairs, fair pricing, and honest mechanics. I've been bringing my cars here for 3 years now. Keep up the great work!",
      avatar: "EN"
    },
    {
      id: 4,
      name: "Blessing Adeniyi",
      location: "Surulere, Lagos",
      rating: 5,
      text: "Amazing customer service! The staff at Klemot Auto Service went above and beyond to help me get the right vehicle within my budget. Very satisfied customer!",
      avatar: "BA"
    },
    {
      id: 5,
      name: "Ibrahim Mohammed",
      location: "Yaba, Lagos",
      rating: 5,
      text: "Professional and reliable! Got my Toyota Venza serviced here and the work was done perfectly. They explain everything clearly and prices are very reasonable.",
      avatar: "IM"
    },
    {
      id: 6,
      name: "Grace Okoro",
      location: "Ajah, Lagos",
      rating: 5,
      text: "Outstanding experience! The team helped me purchase my first car and made the process so smooth. Great selection of quality vehicles and excellent service.",
      avatar: "GO"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Klemot Auto Service LTD.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-gray-700 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg inline-block">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">100+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">5★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React from 'react';
import { Plus, Minus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      id: '1',
      question: 'What types of vehicles do you sell?',
      answer: 'We specialize in quality used cars including Toyota, Honda, Mercedes-Benz, BMW, and other reliable brands. All our vehicles undergo thorough inspection to ensure they meet our high standards before being offered for sale.'
    },
    {
      id: '2',
      question: 'Do you offer warranty on used vehicles?',
      answer: 'Yes, we provide warranty coverage on most of our vehicles. The warranty period varies depending on the vehicle age, mileage, and condition. We\'ll discuss warranty options with you during the purchase process.'
    },
    {
      id: '3',
      question: 'Can I trade in my current vehicle?',
      answer: 'Absolutely! We accept trade-ins and will provide you with a fair market value assessment of your current vehicle. This can be applied as a down payment toward your new purchase.'
    },
    {
      id: '4',
      question: 'Do you provide financing options?',
      answer: 'Yes, we work with several financial institutions to help you secure financing for your vehicle purchase. We can assist you with loan applications and finding the best interest rates available.'
    },
    {
      id: '5',
      question: 'What services do you offer for vehicle maintenance?',
      answer: 'We provide comprehensive auto services including routine maintenance, engine diagnostics, brake repairs, oil changes, tire services, electrical repairs, and more. Our certified mechanics ensure your vehicle runs smoothly.'
    },
    {
      id: '6',
      question: 'How often should I service my vehicle?',
      answer: 'We recommend regular maintenance every 5,000-7,500 miles or every 6 months, whichever comes first. However, this can vary based on your vehicle\'s make, model, age, and driving conditions.'
    },
    {
      id: '7',
      question: 'Do you provide emergency roadside assistance?',
      answer: 'Yes, we offer 24/7 emergency roadside assistance for our customers. This includes services like battery jump-starts, flat tire changes, lockout assistance, and emergency towing.'
    },
    {
      id: '8',
      question: 'Can I schedule a test drive?',
      answer: 'Of course! We encourage test drives for all our vehicles. You can schedule a test drive by calling us at +234 806 765 7616 or visiting our location. Please bring a valid driver\'s license for the test drive.'
    },
    {
      id: '9',
      question: 'What documents do I need to purchase a vehicle?',
      answer: 'You\'ll need a valid ID, proof of income, proof of residence, and if financing, additional documentation may be required. We\'ll guide you through the entire documentation process.'
    },
    {
      id: '10',
      question: 'How can I get a quote for vehicle repairs?',
      answer: 'You can get a free quote by bringing your vehicle to our service center for inspection, calling us at +234 806 765 7616, or describing the issue when you visit. We provide transparent pricing with no hidden costs.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about our vehicles, services, and processes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our friendly team is here to help.
            </p>
            <a
              href="tel:+2348067657616"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
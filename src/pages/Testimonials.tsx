import React from 'react';
import Navigation from '../components/Navigation';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-16">
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default TestimonialsPage;
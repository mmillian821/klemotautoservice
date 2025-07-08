import React from 'react';
import Navigation from '../components/Navigation';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-16">
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default FAQPage;
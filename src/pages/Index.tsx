
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <About />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;


import React from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Location from '../components/Location';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Gallery />
      <About />
      <Location />
      <Contact />
    </div>
  );
};

export default Index;

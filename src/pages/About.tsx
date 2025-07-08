import React from 'react';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Contact from '../components/Contact';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-16">
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default AboutPage;
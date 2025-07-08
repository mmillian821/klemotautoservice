import React from 'react';
import Navigation from '../components/Navigation';
import Location from '../components/Location';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-16">
        <Location />
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
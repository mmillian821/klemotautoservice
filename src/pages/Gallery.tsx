import React from 'react';
import Navigation from '../components/Navigation';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-16">
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default GalleryPage;
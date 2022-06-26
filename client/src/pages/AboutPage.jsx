import React from 'react';
import AboutContent from '../components/aboutContent/AboutContent';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const AboutPage = () => {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <AboutContent />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
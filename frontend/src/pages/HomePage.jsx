import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Client from '../components/Client';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Client />
      <Contact />
    </>
  );
};

export default HomePage;

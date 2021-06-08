import React from 'react';
import AboutComponent from '../components/AboutComponent';
import ContactContainer from '../components/ContactContainer';
import Hero from '../components/Hero';
import PortfolioContainer from '../components/PortfolioContainer';

const Home = () => {
  return (
    <div className="home-wrapper">
      <Hero />
      <AboutComponent />
      <PortfolioContainer />
      <ContactContainer />
    </div>
  );
};

export default Home;

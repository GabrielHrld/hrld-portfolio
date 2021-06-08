import React from 'react';
import AboutComponent from '../components/AboutComponent';
import Hero from '../components/Hero';
import PortfolioContainer from '../components/PortfolioContainer';

const Home = () => {
  return (
    <div className="home-wrapper">
      <Hero />
      <AboutComponent />
      <PortfolioContainer />
    </div>
  );
};

export default Home;

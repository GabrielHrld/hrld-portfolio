import React from 'react';
import AboutComponent from '../components/AboutComponent';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="home-wrapper">
      <Hero />
      <AboutComponent />
    </div>
  );
};

export default Home;

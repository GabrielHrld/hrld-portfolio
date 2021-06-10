import React from 'react';
import { Helmet } from 'react-helmet';

import AboutComponent from '../components/AboutComponent';
import ContactContainer from '../components/ContactContainer';
import Hero from '../components/Hero';
import PortfolioContainer from '../components/PortfolioContainer';
import ScrollToTop from '../components/ScrollToTop';
import favicon from '../../assets/favicon.jpg';

const Home = () => {
  return (
    <div className="home-wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gabriel Rodriguez dev. - Portafolio</title>
        <link rel="icon" type="image/jpg" href={favicon} />
      </Helmet>
      <ScrollToTop />
      <Hero />
      <AboutComponent />
      <PortfolioContainer />
      <ContactContainer />
    </div>
  );
};

export default Home;

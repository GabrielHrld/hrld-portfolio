import React from 'react';
import CardContainer from './CardContainer';

import '../styles/components/PortfolioContainer.scss';

const PortfolioContainer = () => {
  return (
    <div className="portfolio-wrapper" id="portfolio">
      <div className="title">
        <p>Portafolio</p>
      </div>
      <CardContainer />
    </div>
  );
};

export default PortfolioContainer;

import React from 'react';
import CardContainer from './CardContainer';

import '../styles/components/PortfolioContainer.scss';

const PortfolioContainer = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="title">
        <p>Portfolio</p>
      </div>
      <CardContainer />
    </div>
  );
};

export default PortfolioContainer;

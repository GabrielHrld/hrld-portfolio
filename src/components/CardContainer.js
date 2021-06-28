import React, { useEffect, useState } from 'react';

import '../styles/components/CardContainer.scss';
import Card from './Card';
import { portfolio } from '../utils/portfolio';

const CardContainer = () => {
  const [y, setY] = useState(0);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    if (y >= 1000) setSticky(true);
  }, [y]);

  window.addEventListener('scroll', () => {
    setY(window.scrollY);
  });

  return (
    <div className="container">
      {portfolio.map((item, index) => (
        <Card
          image={item.image}
          key={item + index}
          link={item.link}
          title={item.title}
          snippet={item.snippet}
          sticky={sticky}
        />
      ))}
    </div>
  );
};

export default CardContainer;

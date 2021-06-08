import React, { useEffect, useState } from 'react';

import '../styles/components/CardContainer.scss';
import Card from './Card';

const test = [
  {
    title: 'NASA Has Found Hundreds Of Potential New Planets',
    snippet:
      'NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.',
    link: 'https://www.google.com',
  },
  {
    title: 'NASA Has Found Hundreds Of Potential New Planets',
    snippet:
      'NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.',
    link: 'https://www.google.com',
  },
  {
    title: 'NASA Has Found Hundreds Of Potential New Planets',
    snippet:
      'NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.',
    link: 'https://www.google.com',
  },
  {
    title: 'NASA Has Found Hundreds Of Potential New Planets',
    snippet:
      'NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.',
    link: 'https://www.google.com',
  },
];

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
      {test.map((item, index) => (
        <Card
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

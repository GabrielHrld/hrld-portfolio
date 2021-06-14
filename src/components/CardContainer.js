import React, { useEffect, useState } from 'react';

import '../styles/components/CardContainer.scss';
import Card from './Card';

const portfolio = [
  {
    title: 'HRLD-merce',
    snippet:
      'Ecommerce básico completo desarrollado en React como tecnología frontend, y NestJS junto con Node como tecnología de backend.',
    link: 'https://hrld-merce.vercel.app/',
    image: 'https://i.imgur.com/OEqSziK.png',
  },
  {
    title: 'Notes App',
    snippet:
      'Pequeña aplicación en la cual podemos registrar nuestras notas, editarlas o eliminarlas. Desarrollado en Node utilizando Express como tecnología de backend.',
    link: 'http://ec2-3-141-196-58.us-east-2.compute.amazonaws.com/',
    image: 'https://i.imgur.com/U5Wqha7.png',
  },
  {
    title: 'Cripto Exchange',
    snippet:
      "Trackea el precio de las veinte criptomonedas más conocidas, así como su precio y reporta los mejores exchange's en los cuales podemos adquirirlas.",
    link: 'https://exchange-hrld.vercel.app/',
    image: 'https://i.imgur.com/8tfw2vk.png',
  },
  {
    title: 'Traveleter',
    snippet: 'Web layout diseñado para una empresa de viajes.',
    link: 'https://traveleter.vercel.app/',
    image: 'https://i.imgur.com/cxfpNvJ.png',
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

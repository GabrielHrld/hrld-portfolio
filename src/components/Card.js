import React from 'react';

import image from '../../assets/traveleter.png';

import '../styles/components/Card.scss';

const Card = ({ snippet, title, link, sticky }) => {
  return (
    <div class={sticky ? 'card stickyCard' : 'card'}>
      <figure class="card__thumb">
        <img src={image} alt="Picture by Kyle Cottrell" class="card__image" />
        <figcaption class="card__caption">
          <h2 class="card__title">{title}</h2>
          <p class="card__snippet">{snippet}</p>
          <a href={link} class="card__button">
            Read more
          </a>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;

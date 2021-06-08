import React from 'react';

import image from '../../assets/traveleter.png';

import '../styles/components/Card.scss';

const Card = ({ snippet, title, link, sticky }) => {
  return (
    <div className={sticky ? 'card stickyCard' : 'card'}>
      <figure className="card__thumb">
        <img
          src={image}
          alt="Picture by Kyle Cottrell"
          className="card__image"
        />
        <figcaption className="card__caption">
          <h2 className="card__title">{title}</h2>
          <p className="card__snippet">{snippet}</p>
          <a href={link} className="card__button">
            Read more
          </a>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;

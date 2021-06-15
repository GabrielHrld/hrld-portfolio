import React from 'react';

import '../styles/components/Card.scss';

const Card = ({ snippet, title, link, sticky, image }) => {
  return (
    <div className={sticky ? 'card stickyCard' : 'card'}>
      <figure className="card__thumb">
        <img
          loading="lazy"
          src={image}
          alt="Picture by Kyle Cottrell"
          className="card__image"
        />
        <figcaption className="card__caption">
          <h2 className="card__title">{title}</h2>
          <p className="card__snippet">{snippet}</p>
          <a href={link} className="card__button" target="_blank">
            Ir al link
          </a>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;

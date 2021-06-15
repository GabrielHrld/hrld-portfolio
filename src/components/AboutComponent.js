import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import SideProfile from '../../assets/about.png';
import '../styles/components/AboutComponent.scss';

const AboutComponent = () => {
  const [sticky, setSticky] = useState(false);
  const [stickySpeech, setStickySpeech] = useState(false);
  window.addEventListener('scroll', () => {
    const scrollDistance = window.scrollY;
    if (scrollDistance >= 520) setSticky(true);
    if (scrollDistance >= 520) setTimeout(() => setStickySpeech(true), 1000);
  });

  return (
    <section className="about-wrapper" id="about">
      <div className="about-container">
        <div className="photo">
          <div
            className={
              sticky ? 'photo-container photoSticky' : 'photo-container'
            }
          >
            <img loading="lazy" src={SideProfile} alt="side profile" />
          </div>
        </div>
        <div className="info">
          <div
            className={
              sticky ? 'info-container containerSticky' : 'info-container'
            }
          >
            <p className={sticky ? 'about stickyParaph' : 'about'}>Sobre mí</p>
            <h3 className={stickySpeech ? 'stickySpeech' : ''}>
              Hola. Mi nombre es Gabriel Rodriguez, soy{' '}
              <span>desarrollador web Fullstack</span>. Inspirado por las
              historias que acontecen en las ciudades más innovadoras del mundo
              como lo son <span>Sillicon Valley ó Singapur</span>. Desde muy
              chico fui apasionado por la <span>tecnología</span>, creo que es
              lo único en este mundo capáz de amoldarse a cualquier aspecto de
              nuestra vida.
              <br />
              El futuro es tecnología, <span>el futuro es hoy.</span>
            </h3>
            <p className={sticky ? 'learn stickyParaph' : 'learn'}>
              <Link to="/about">
                Más información <BsArrowRight className="icon" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;

import React, { useRef, useState } from 'react';
import { Parallax } from 'react-parallax';

import Bg from '../../assets/sintitulo.jpg';
import '../styles/components/Hero.scss';

const Hero = () => {
  return (
    <Parallax bgImage={Bg} bgClassName="hero" strength={400}>
      <div className="hero-container" id="hero">
        <div className="hero-principal">
          <div className="hero-principal_text">
            <h1>
              Gabriel Rodriguez <span>dev.</span>
            </h1>
            <p>Portafolio</p>
          </div>
        </div>
        <div className="hero-secondary">
          <div className="hero-secondary_text">
            <h1>Flexibilidad</h1>
            <h2>Creatividad</h2>
            <h3>Eficacia</h3>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Hero;

import React, { useRef, useState } from 'react';
import { Parallax } from 'react-parallax';

import Bg from '../../assets/bg-hero.jpg';
import '../styles/components/Hero.scss';

const Hero = () => {
  return (
    <Parallax bgImage={Bg} bgClassName="hero" strength={400}>
      <div className="hero-container" id="hero">
        <div className="hero-principal">
          <div className="hero-principal_text">
            <h1 className="animate__animated animate__fadeInLeft">
              Gabriel Rodriguez{' '}
              <span className="animate__animated animate__fadeInLeft animate__delay-1s">
                dev.
              </span>
            </h1>
            <p className="animate__animated animate__fadeInLeft animate__delay-2s">
              Portafolio
            </p>
          </div>
        </div>
        <div className="hero-secondary">
          <div className="hero-secondary_text">
            <h1 className="animate__animated animate__fadeInRight">
              Flexibilidad
            </h1>
            <h2 className="animate__animated animate__fadeInRight animate__delay-1s">
              Creatividad
            </h2>
            <h3 className="animate__animated animate__fadeInRight animate__delay-2s">
              Eficacia
            </h3>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Hero;

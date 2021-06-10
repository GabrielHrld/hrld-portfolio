import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import { useWindowScroll } from 'react-use';
import { Helmet } from 'react-helmet';

import ScrollToTop from '../components/ScrollToTop';
import Bg from '../../assets/bg-empty.jpg';
import '../styles/pages/About.scss';
import favicon from '../../assets/favicon.jpg';

const About = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 360) {
      setVisible(true);
    }
  }, [pageYOffset]);

  return (
    <Parallax bgImage={Bg} strength={700}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sobre mí - Gabriel Rodriguez dev.</title>
        <link rel="icon" type="image/jpg" href={favicon} />
      </Helmet>
      <ScrollToTop light />
      <div className="aboutPage-wrapper">
        <div className="aboutPage-container">
          <div className="coverPage-container">
            <img
              src="https://images.squarespace-cdn.com/content/v1/551c27cbe4b0f5016a1d5d29/1454701947128-94BOF9DR2YP4XC217SIM/ke17ZwdGBToddI8pDm48kMkJiBwTQHGDHNdKDiaHrccUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2doRj74AyrZLIEC6NtbOwxSqdUV305ssLg6_tWCZXGrUDW07ycm2Trb21kYhaLJjddA/bubble-water-banner-1500x400px.jpg?format=2500w"
              alt="cover page"
            />
          </div>
          <div className="titles">
            <div className="subtitleAbout">
              <p className="aboutMe">
                <span>About me</span>
              </p>
            </div>
            <div className="nameContainer">
              <h1>Gabriel Rodriguez</h1>
            </div>
            <div className="subtitleCity">
              <p className="city">
                <span>Buenos Aires, Argentina</span>
              </p>
            </div>
          </div>
          <div className="paragraphContainer">
            <div
              className={visible ? 'paragraph visibleParagraph' : 'paragraph'}
              id="paragraph"
            >
              <p>
                Soy un <span>Web developer Fullstack.</span> Soy originario del
                sur de Buenos Aires con poco más de
                <span> 3 años desarrollando código.</span> Me considero un
                apasionado por el aprendizaje y el conocimiento constante. Creo
                que todo se puede solucionar con software, aún más teniendo las
                ideas y el objetivo claro.
              </p>
              <p>
                <span>"Todo parece imposible, hasta que se hace"</span> <br />-
                Nelson Mandela.
              </p>
              <p>
                Nací un 25 de agosto, actualmente vivo cercano a la Ciudad
                Autónoma de Buenos Aires.{' '}
                <span>
                  Soy una persona pragmática, organizada y con alta
                  adaptabilidad frente a situaciones demandantes.{' '}
                </span>
                Me inspiran las historias surgidas de <span>"ideas locas"</span>{' '}
                que desembocan en un producto de uso masivo a{' '}
                <span>nivel global.</span> Amante de los desafíos y las cosas
                difíciles de hacer. Por otro lado, los deportes y la cocina son
                mi principal hobbie.
              </p>
              <p>
                <span>"El futuro es tecnología, el futuro es hoy"</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default About;

import React from 'react';
import { Parallax } from 'react-parallax';
import { Helmet } from 'react-helmet';

import Bg from '../../assets/bg-empty.jpg';
import '../styles/pages/NotFound.scss';

const NotFound = () => {
  return (
    <Parallax bgImage={Bg} strength={400}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Página no encontrada - Gabriel Rodriguez dev.</title>
        <link rel="icon" type="image/jpg" href={favicon} />
      </Helmet>
      <div className="notFound-container">
        <div className="imageContainer">
          <h1>404</h1>
        </div>
        <div className="textContainer">
          <h1>Not Found</h1>
        </div>
      </div>
    </Parallax>
  );
};

export default NotFound;

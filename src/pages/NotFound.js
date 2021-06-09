import React from 'react';
import { Parallax } from 'react-parallax';

import Bg from '../../assets/bg-empty.jpg';
import '../styles/pages/NotFound.scss';

const NotFound = () => {
  return (
    <Parallax bgImage={Bg} strength={400}>
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

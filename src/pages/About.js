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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                optio quidem magni beatae excepturi quos, laboriosam
                exercitationem at tenetur unde? Dolorum rerum totam debitis
                ullam temporibus eligendi earum doloribus, veritatis commodi
                vero hic aspernatur dolore accusamus provident illum quasi
                ipsum?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nostrum, molestias.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
                delectus. Pariatur, asperiores! Cupiditate, illo! Quidem fuga
                quia consequatur, accusamus vero modi dolores mollitia harum,
                quibusdam repellat natus fugit iste odit libero esse dolor
                beatae possimus nulla vel impedit porro iure sint? Dolore quis,
                ratione nobis natus ipsum minus cumque eum est fuga a,
                praesentium ut facilis ex ea et voluptate?
              </p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default About;

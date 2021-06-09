import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

import '../styles/components/Footer.scss';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="info">
          <div className="copyright">
            <p>© Gabriel Rodriguez </p>
            <p>@heraldHRLD</p>
          </div>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/gabrielrodhrld/"
              target="_blank"
            >
              <FaLinkedin className="icon" />
            </a>
            <a href="https://github.com/HeraldHRLD/" target="_blank">
              <FaGithub className="icon" />
            </a>
            <a href="https://twitter.com/gabriel_hrld/" target="_blank">
              <FaTwitter className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

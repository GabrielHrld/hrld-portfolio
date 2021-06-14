import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

import '../../styles/components/Navbar/Header.scss';
import SideMenu from './SideMenu';

const header = () => {
  const path = useLocation().pathname;
  const [openBurger, setOperBurger] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [y, setY] = useState(0);
  const handleOpenBurger = () => setOperBurger(!openBurger);

  useEffect(() => {
    if (y >= 650) setSticky(true);
    if (y < 650) setSticky(false);
    if (path != '/') setSticky(true);
  }, [y, path]);

  window.addEventListener('scroll', () => {
    setY(window.scrollY);
  });
  return (
    <div className={sticky ? 'header-wrapper sticky' : 'header-wrapper'}>
      <div className="header-container">
        <div className="logo-container">
          <h3>
            <a href="/" className="logo">
              Gabriel dev.
            </a>
          </h3>
        </div>
        <div className="nav-wrapper">
          <nav className="nav">
            {path == '/about' ? (
              <ul className="nav-links">
                <li className="nav-links_item">
                  <a href="/">home</a>
                </li>
              </ul>
            ) : (
              <ul className="nav-links">
                <li className="nav-links_item">
                  <Link
                    smooth={true}
                    duration={500}
                    to="hero"
                    spy={true}
                    activeClass="linkActive"
                  >
                    home
                  </Link>
                </li>
                <li className="nav-links_item">
                  <Link
                    smooth={true}
                    duration={500}
                    to="about"
                    spy={true}
                    activeClass="linkActive"
                  >
                    sobre mi
                  </Link>
                </li>
                <li className="nav-links_item">
                  <Link
                    smooth={true}
                    duration={500}
                    to="portfolio"
                    spy={true}
                    activeClass="linkActive"
                  >
                    portafolio
                  </Link>
                </li>
                <li className="nav-links_item">
                  <Link
                    smooth={true}
                    duration={500}
                    to="contact"
                    spy={true}
                    activeClass="linkActive"
                  >
                    contacto
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>
        <div className="burger-container" onClick={handleOpenBurger}>
          <div
            className={openBurger ? 'burger-line active' : 'burger-line'}
          ></div>
          <div
            className={openBurger ? 'burger-line active' : 'burger-line'}
          ></div>
          <div
            className={openBurger ? 'burger-line active' : 'burger-line'}
          ></div>
        </div>
        <SideMenu state={openBurger} setState={setOperBurger} />
      </div>
    </div>
  );
};

export default header;

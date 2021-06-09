import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
            <a href="/">Gabriel dev.</a>
          </h3>
        </div>
        <div className="nav-wrapper">
          <nav className="nav">
            <ul className="nav-links">
              <li className="nav-links_item">
                <a href="#hero">home</a>
              </li>
              <li className="nav-links_item">
                <a href="#about">about</a>
              </li>
              <li className="nav-links_item">
                <a href="#portfolio">work</a>
              </li>
              <li className="nav-links_item">
                <a href="#contact">contact</a>
              </li>
            </ul>
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
        <SideMenu active={openBurger} />
      </div>
    </div>
  );
};

export default header;

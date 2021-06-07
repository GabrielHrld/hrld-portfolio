import React, { useState } from 'react';

import '../../styles/components/Navbar/Header.scss';
import SideMenu from './SideMenu';

const header = () => {
  const [openBurger, setOperBurger] = useState(false);

  const handleOpenBurger = () => setOperBurger(!openBurger);

  return (
    <div className="header-wrapper">
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
                <a href="">home</a>
              </li>
              <li className="nav-links_item">
                <a href="">work</a>
              </li>
              <li className="nav-links_item">
                <a href="">about</a>
              </li>
              <li className="nav-links_item">
                <a href="">contact</a>
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

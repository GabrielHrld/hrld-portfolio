import React from 'react';
import { useLocation } from 'react-router-dom';

import { Link, animateScroll as scroll } from 'react-scroll';

import '../../styles/components/Navbar/SideMenu.scss';

const SideMenu = ({ state, setState }) => {
  const path = useLocation().pathname;

  const handleChange = (e) => {
    e.preventDefault();
    setState(!state);
  };

  return (
    <div className={state ? 'sideMenu-wrapper active' : 'sideMenu-wrapper'}>
      <div className="sideMenu-container">
        {path == '/about' ? (
          <ul className="sideMenu-nav_links">
            <li
              className={
                state ? 'sideMenu-nav_item activeItem' : 'sideMenu-nav_item'
              }
            >
              <Link
                smooth={true}
                duration={500}
                to="hero"
                spy={true}
                activeClass="linkActive"
                onClick={handleChange}
              >
                HOME
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="sideMenu-nav_links">
            <li
              className={
                state ? 'sideMenu-nav_item activeItem' : 'sideMenu-nav_item'
              }
            >
              <Link
                smooth={true}
                duration={500}
                to="hero"
                spy={true}
                activeClass="linkActive"
                onClick={handleChange}
              >
                HOME
              </Link>
            </li>
            <li
              className={
                state ? 'sideMenu-nav_item activeItem' : 'sideMenu-nav_item'
              }
            >
              <Link
                smooth={true}
                duration={500}
                to="about"
                spy={true}
                activeClass="linkActive"
                onClick={handleChange}
              >
                SOBRE MI
              </Link>
            </li>
            <li
              className={
                state ? 'sideMenu-nav_item activeItem' : 'sideMenu-nav_item'
              }
            >
              <Link
                smooth={true}
                duration={500}
                to="portfolio"
                spy={true}
                activeClass="linkActive"
                onClick={handleChange}
              >
                PORTAFOLIO
              </Link>
            </li>
            <li
              className={
                state ? 'sideMenu-nav_item activeItem' : 'sideMenu-nav_item'
              }
            >
              <Link
                smooth={true}
                duration={500}
                to="contact"
                spy={true}
                activeClass="linkActive"
                onClick={handleChange}
              >
                CONTACTO
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SideMenu;

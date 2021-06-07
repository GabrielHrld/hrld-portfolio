import React from 'react';

import '../../styles/components/Navbar/SideMenu.scss';

const SideMenu = ({ active }) => {
  return (
    <div className={active ? 'sideMenu-wrapper active' : 'sideMenu-wrapper'}>
      <div className="sideMenu-container">
        <ul className="sideMenu-nav_links">
          <li
            className={
              active ? 'sideMenu-nav_item activeItem' : 'sideMenu-nav_item'
            }
          >
            <a href="/">HOME</a>
          </li>
          <li
            className={
              active ? 'sideMenu-nav_item activeItem' : 'sideMenu-nav_item'
            }
          >
            <a href="/">ABOUT</a>
          </li>
          <li
            className={
              active ? 'sideMenu-nav_item activeItem' : 'sideMenu-nav_item'
            }
          >
            <a href="/">WORK</a>
          </li>
          <li
            className={
              active ? 'sideMenu-nav_item activeItem' : 'sideMenu-nav_item'
            }
          >
            <a href="/">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;

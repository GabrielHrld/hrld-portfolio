import React from 'react';
import Footer from './Footer';

import Header from './Navbar/Header';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

import React from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <nav>
      <Header />
      {children}
      <Footer />
    </nav>
  );
};

export default Layout;

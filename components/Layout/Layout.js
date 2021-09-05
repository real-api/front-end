import React from 'react';

import Header from './Header/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <footer>footer</footer>
    </div>
  );
};

export default Layout;

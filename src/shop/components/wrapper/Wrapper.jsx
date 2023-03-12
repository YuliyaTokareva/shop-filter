import React from 'react';

import Header from '../header/Header';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
const Wrapper = ({ children }) => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      {children}
    </>
  );
};

export default Wrapper;

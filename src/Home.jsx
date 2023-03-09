import * as React from 'react';
import Products from './shop/components/products/Products';
import TopSort from './shop/components/topSort/TopSort';
import Breadcrumbs from './shop/components/breadcrumbs/Breadcrumbs';
import Header from './shop/components/header/Header';

const Home = () => {
  return (
    <div className="page-body">
      <Header />
      <Breadcrumbs />
      <TopSort />
      <Products />
    </div>
  );
};

export default Home;

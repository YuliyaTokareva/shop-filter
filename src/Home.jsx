import React, { useMemo, useState } from 'react';
import Products from './shop/components/products/Products';
import TopSort from './shop/components/topSort/TopSort';
import Breadcrumbs from './shop/components/breadcrumbs/Breadcrumbs';
import Header from './shop/components/header/Header';

import { dataProducts } from './productsData';

const Home = () => {
  const [sortParam, setSortParam] = useState('hight');
  const [priceParam, setpriceParam] = useState([150, 3000]);
  const [openMobFilter, setopenMobFilter] = useState(false);
  const products = useMemo(() => {
    const productsList = dataProducts
      .filter((el) => el.price >= priceParam[0] && el.price <= priceParam[1])
      .sort((a, b) => {
        switch (sortParam) {
          case 'low':
            return b.price - a.price;
          case 'hight':
            return a.price - b.price;
        }
      });
    return productsList;
  }, [sortParam, priceParam]);
  const handlerClick = (method) => {
    setSortParam(method);
  };
  const handlerClickMobFilter = () => {
    setopenMobFilter(!openMobFilter);
  };
  return (
    <div className="page-body">
      <Header />
      <Breadcrumbs />
      <TopSort
        activeSortBtn={sortParam}
        handlerClick={handlerClick}
        mobHandlerClick={handlerClickMobFilter}
        conditionMobFilter={openMobFilter}
      />

      <Products dataProducts={products} />
    </div>
  );
};

export default Home;

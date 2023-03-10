import React, { useMemo, useState } from 'react';
import Products from './shop/components/products/Products';
import TopSort from './shop/components/topSort/TopSort';
import Breadcrumbs from './shop/components/breadcrumbs/Breadcrumbs';
import Header from './shop/components/header/Header';
import { startRange, endRange } from './filterData';
import { dataProducts } from './productsData';

const Home = () => {
  const [sortParam, setSortParam] = useState('hight');
  const [priceParam, setPriceParam] = useState([startRange, endRange]);
  const [brandParam, setBrandParam] = useState([]);
  const [openMobFilter, setopenMobFilter] = useState(false);
  const products = useMemo(() => {
    let productsList = dataProducts
      .filter((product) => product.price >= priceParam[0] && product.price <= priceParam[1])
      .filter(
        (product) => brandParam.length === 0 || brandParam.includes(product.brand.toLowerCase())
      )
      .sort((a, b) => {
        switch (sortParam) {
          case 'low':
            return b.price - a.price;
          case 'hight':
            return a.price - b.price;
        }
      });

    return productsList;
  }, [sortParam, priceParam, brandParam]);
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
        setPriceParam={setPriceParam}
        setBrandParam={setBrandParam}
      />

      <Products
        dataProducts={products}
        setPriceParam={setPriceParam}
        setBrandParam={setBrandParam}
      />
    </div>
  );
};

export default Home;

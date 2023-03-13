import React, { useMemo, useState, useEffect } from 'react';
import Products from '../shop/components/products/Products';
import TopSort from '../shop/components/topSort/TopSort';
import Wrapper from '../shop/components/wrapper/Wrapper';
import { startRange, endRange } from '../filterData';
import { dataProducts } from '../productsData';

const Home = () => {
  const [sortParam, setSortParam] = useState('hight');
  const [priceParam, setPriceParam] = useState([startRange, endRange]);
  const [brandParam, setBrandParam] = useState([]);
  const [openMobFilter, setopenMobFilter] = useState(false);
  const [noResultFilter, setNoResultFilter] = useState('');
  const [getData, setgetData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      return setgetData(dataProducts);
    }, 3000);
  }, []);
  const products = useMemo(() => {
    let productsList = getData
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
  }, [getData, sortParam, priceParam, brandParam]);
  const handlerClick = (method) => {
    setSortParam(method);
  };
  const handlerClickMobFilter = () => {
    setopenMobFilter(!openMobFilter);
  };

  return (
    <div className="page-body">
      <Wrapper>
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
      </Wrapper>
    </div>
  );
};

export default Home;

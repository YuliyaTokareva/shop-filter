import React, { useMemo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Products from '../shop/components/products/Products';
import TopSort from '../shop/components/topSort/TopSort';
import Wrapper from '../shop/components/wrapper/Wrapper';
import { startRange, endRange } from '../filterData';
import { dataProducts } from '../productsData';
import * as productsActions from '../shop/products.actions';
import * as productsSelectors from '../shop/products.selectors';

const Home = ({ getProductList, productsList }) => {
  const [sortParam, setSortParam] = useState('hight');
  const [priceParam, setPriceParam] = useState([startRange, endRange]);
  const [brandParam, setBrandParam] = useState([]);
  const [openMobFilter, setopenMobFilter] = useState(false);

  // const [getData, setgetData] = useState([]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     return setgetData(dataProducts);
  //   }, 3000);
  // }, []);
  useEffect(() => {
    getProductList();
  }, []);

  const products = useMemo(() => {
    if (!productsList) {
      return [];
    }
    let productsListFilter = [...productsList]
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

    return productsListFilter;
  }, [sortParam, priceParam, brandParam, productsList]);
  const handlerClick = (method) => {
    setSortParam(method);
  };
  const handlerClickMobFilter = () => {
    setopenMobFilter(!openMobFilter);
  };
  console.log(productsList);
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
          priceParam={priceParam}
        />
        <Products
          dataProducts={products}
          setPriceParam={setPriceParam}
          setBrandParam={setBrandParam}
          priceParam={priceParam}
        />
      </Wrapper>
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    getProductList: (url) => dispatch(productsActions.getProductList(url))
  };
};
const mapState = (state) => {
  return {
    productsList: productsSelectors.productsListSelector(state)
  };
};
export default connect(mapState, mapDispatch)(Home);

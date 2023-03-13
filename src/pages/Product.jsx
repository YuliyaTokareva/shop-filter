import React from 'react';
import ProductPage from '../shop/components/productPage/ProductPage';
import Wrapper from '../shop/components/wrapper/Wrapper';

const Product = () => {
  return (
    <div className="product-page">
      <Wrapper>
        <ProductPage />
      </Wrapper>
    </div>
  );
};

export default Product;

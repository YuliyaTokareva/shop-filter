import React from 'react';
import ProductCard from '../productCard/ProductCard';
import { dataProducts } from '../../../productsData';
import './products.scss';

const Products = () => {
  return (
    <div className="products-list">
      {dataProducts.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
};

export default Products;

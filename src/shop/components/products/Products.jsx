import React from 'react';
import ProductCard from '../productCard/ProductCard';
import Filter from '../filter/Filter';
import './products.scss';

const Products = ({ dataProducts }) => {
  return (
    <div className="products-body">
      <aside className="products-body__aside">
        <Filter />
      </aside>
      <div className="products-list">
        {dataProducts.map((product) => (
          <ProductCard data={product} key={product.id.toString()} />
        ))}
      </div>
    </div>
  );
};

export default Products;

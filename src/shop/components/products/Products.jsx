import React from 'react';
import ProductCard from '../productCard/ProductCard';
import Filter from '../filter/Filter';
import './products.scss';

const Products = ({ dataProducts, setPriceParam, setBrandParam }) => {
  return (
    <div className="products-body">
      <aside className="products-body__aside">
        <Filter setPriceParam={setPriceParam} setBrandParam={setBrandParam} />
      </aside>
      <div className="products-list">
        {dataProducts.length === 0 ? (
          <h3>Loading...</h3>
        ) : (
          dataProducts.map((product) => <ProductCard data={product} key={product.id.toString()} />)
        )}
      </div>
    </div>
  );
};

export default Products;

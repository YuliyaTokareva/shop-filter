import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../spinner/Spinner';
import ProductCard from '../productCard/ProductCard';
import Filter from '../filter/Filter';
import * as productsSelectors from '../../../shop/products.selectors';
import './products.scss';

const Products = ({ spinner, dataProducts, setPriceParam, setBrandParam }) => {
  return (
    <div className="products-body">
      <aside className="products-body__aside">
        <Filter setPriceParam={setPriceParam} setBrandParam={setBrandParam} />
      </aside>
      <div className="products-list">
        {spinner ? <Spinner /> : ''}
        {dataProducts
          ? dataProducts.map((product) => (
              <ProductCard data={product} key={product.id.toString()} />
            ))
          : ''}
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    spinner: productsSelectors.productsFetchingSelector(state)
  };
};
export default connect(mapState, null)(Products);

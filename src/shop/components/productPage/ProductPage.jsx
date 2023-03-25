import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { dataProducts } from '../../../productsData';
import Basket from '../svg/Basket';
import './productPage.scss';

const ProductPage = () => {
  const { pathname } = useLocation();
  const productId = pathname.slice(1);

  const productData = dataProducts.filter((product) => product.id.toString() === productId)[0];
  if (!productData) {
    return '';
  }
  return (
    <div className="product-data">
      <div className="product-data-top">
        <div className="product-image">
          <img src={`${productData.img}`} alt={productData.name} className="image__photo" />
        </div>
        <div className="product-top-text">
          <div className="product-description">
            <h2 className="product-description__title">{productData.name}</h2>
            <p className="product-description__price">${productData.price}</p>
            <button className="product-description__button">
              <Basket />
              <span className="product-description__button-text">Buy</span>
            </button>
          </div>

          <div className="product-parameters">
            <div className="product-parameters__row">
              <span className="product-parameters__title">Category:</span>
              <span className="product-parameters__text">{productData.category}</span>
            </div>
            <div className="product-parameters__row">
              <span className="product-parameters__title">Type:</span>
              <span className="product-parameters__text">{productData.type}</span>
            </div>
            <div className="product-parameters__row">
              <span className="product-parameters__title">Material:</span>
              <span className="product-parameters__text">{productData.material}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-text">
        <p className="product-text__description">{productData.text}</p>
      </div>
    </div>
  );
};

export default ProductPage;

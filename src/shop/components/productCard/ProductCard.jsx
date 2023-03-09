import React from 'react';
import './productCard.scss';

const ProductCard = ({ data }) => {
  return (
    <article className="card">
      <div className="image">
        <img src={`${data.img}`} alt={data.name} className="image__photo" />
      </div>
      <div className="text">
        <h2 className="text__title">{data.name}</h2>
        <p className="text__price">${data.price}</p>
        <p className="text__brand">{data.brand}</p>
        <p className="text__description">{data.description}</p>
        <button className="text__button">View details</button>
      </div>
    </article>
  );
};

export default ProductCard;

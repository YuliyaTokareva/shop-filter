import React from 'react';
import { useNavigate } from 'react-router-dom';
import './productCard.scss';

const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <article className="card" onClick={() => navigate(`${data.id}`)}>
      <div className="image" style={{ backgroundImage: `url(${data.img})` }}>
        {/* <img src={`${data.image}`} alt={data.name} className="image__photo" /> */}
      </div>
      <div className="text">
        <h2 className="text__title">{data.name}</h2>
        <p className="text__price">${data.price}</p>
        <p className="text__brand">{data.brand}</p>
        <p className="text__description">{data.description}</p>
        <button className="text__button" onClick={() => navigate(`${data.id}`)}>
          View details
        </button>
      </div>
    </article>
  );
};

export default ProductCard;

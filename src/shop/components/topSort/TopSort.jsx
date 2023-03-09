import React from 'react';
import Filter from '../svg/Filter';
import ArrowUp from '../svg/ArrowUp';
import ArrowDown from '../svg/ArrowDown';
import FilterBlock from '../filter/Filter';
import './topSort.scss';

const TopSort = () => {
  return (
    <>
      <div className="sort-block">
        <div className="sort">
          <div className="sort__button-price-block">
            <button className="sort__btn active">
              <span>Price: Low to High</span>

              <span className="sort__btn-img">
                <ArrowUp />
              </span>
            </button>
            <button className="sort__btn">
              <span>Price: High to Low</span>
              <span className="sort__btn-img">
                <ArrowDown />
              </span>
            </button>
          </div>
          <button className="sort__menu">
            <Filter />
          </button>
        </div>
      </div>
      <div className="filter-mobile">
        <div className="filter-mobile__decorated-line">
          <span className="filter-mobile__decorated-triangle"></span>
        </div>
        <FilterBlock />
      </div>
    </>
  );
};

export default TopSort;

import React from 'react';
import Filter from '../svg/Filter';
import Closed from '../svg/Closed';
import ArrowUp from '../svg/ArrowUp';
import ArrowDown from '../svg/ArrowDown';
import FilterBlock from '../filter/Filter';
import './topSort.scss';

const TopSort = ({
  activeSortBtn,
  handlerClick,
  mobHandlerClick,
  conditionMobFilter,
  setPriceParam,
  setBrandParam,
  priceParam
}) => {
  return (
    <>
      <div className="sort-block">
        <div className="sort">
          <div className="sort__button-price-block">
            <button
              onClick={() => handlerClick('low')}
              className={activeSortBtn === 'low' ? 'sort__btn active' : 'sort__btn'}>
              <span>Price: Low to High</span>

              <span className="sort__btn-img">
                <ArrowUp />
              </span>
            </button>
            <button
              onClick={() => handlerClick('hight')}
              className={activeSortBtn === 'low' ? 'sort__btn ' : 'sort__btn active'}>
              <span>Price: High to Low</span>
              <span className="sort__btn-img">
                <ArrowDown />
              </span>
            </button>
          </div>
          <button className={'sort__menu'} onClick={() => mobHandlerClick()}>
            {conditionMobFilter === true ? <Closed /> : <Filter />}
          </button>
        </div>
      </div>

      <div className={conditionMobFilter === true ? 'filter-mobile open' : 'filter-mobile'}>
        <div className="filter-mobile__block">
          <div className="filter-mobile__decorated-line">
            <span className="filter-mobile__decorated-triangle"></span>
          </div>
          <FilterBlock setPriceParam={setPriceParam} setBrandParam={setBrandParam} />
        </div>
      </div>
    </>
  );
};

export default TopSort;

import React from 'react';

import './filter.scss';

const Filter = () => {
  return (
    <div className="filter-block">
      <button className="filter-block__reset">Reset filter</button>
      <div className="filter-block__title-block">
        <span className="filter-block__title">Price range, $</span>
        <button className="filter-block__apply">Apply</button>
      </div>
      <div>
        <label htmlFor="min">Min</label>
        <input type="number" id="min" name="min" min="150" max="3000" />
      </div>
      <div>
        <label htmlFor="max">Max</label>
        <input type="number" id="max" name="max" min="150" max="3000" />
      </div>
      <div>
        <input type="range" id="volume" name="volume" min="150" max="3000" />
      </div>
      <div className="filter-block__title-block brands">
        <span className="filter-block__title">Brands</span>
        <button className="filter-block__apply">Apply</button>
      </div>
      <div className="filter-block__check-row">
        <label htmlFor="samsung">Samsung</label>
        <input type="checkbox" id="samsung" name="samsung" checked />
      </div>
      <div className="filter-block__check-row">
        <label htmlFor="apple">Apple</label>
        <input type="checkbox" id="apple" name="apple" />
      </div>
      <div className="filter-block__check-row">
        <label htmlFor="huawei">Huawei</label>
        <input type="checkbox" id="huawei" name="huawei" />
      </div>
      <div className="filter-block__check-row">
        <label htmlFor="pocco">Pocco</label>
        <input type="checkbox" id="pocco" name="pocco" />
      </div>
      <div className="filter-block__check-row">
        <label htmlFor="lenovo">Lenovo</label>
        <input type="checkbox" id="lenovo" name="lenovo" />
      </div>
    </div>
  );
};

export default Filter;

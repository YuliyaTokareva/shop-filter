import React, { useState, useEffect } from 'react';

import './filter.scss';

const Filter = () => {
  const startRange = 150;
  const endRange = 3000;

  const [minValue, setMinValue] = useState(startRange);
  const [maxValue, setMaxValue] = useState(endRange);
  const [fillColorPercent, setFillColorPercent] = useState([0, 100]);
  const fillColor = () => {
    const percent1 = (minValue / endRange) * 100;
    const percent2 = (maxValue / endRange) * 100;
    setFillColorPercent([percent1, percent2]);
  };
  const handlerNumberMax = (e, typeValue) => {
    let newVal = e.target.value;

    switch (typeValue) {
      case 'max':
        if (newVal - minValue <= 150) {
          setMaxValue(minValue + 1);
          fillColor();
          return;
        } else {
          setMaxValue(newVal);
          fillColor();
          return;
        }

      case 'min':
        if (maxValue - newVal <= 150) {
          setMinValue(maxValue - 1);
          fillColor();
          return;
        } else {
          setMinValue(newVal);
          fillColor();
          return;
        }
    }
  };

  return (
    <div className="filter-block">
      <button className="filter-block__reset mob">Reset filter</button>
      <div className="filter-block__title-block">
        <span className="filter-block__title">Price range, $</span>
        <button className="filter-block__apply mob">Apply</button>
      </div>
      <div className="filter-block__numper-block">
        <div className="filter-block__numper-price">
          <label htmlFor="min">Min</label>
          <input
            type="number"
            id="min-num"
            name="min"
            min={startRange}
            max={endRange}
            step="1"
            value={minValue}
            readOnly
          />
        </div>
        <div className="filter-block__numper-price">
          <label htmlFor="max">Max</label>
          <input
            type="number"
            id="max-num"
            name="max"
            min={startRange}
            max={endRange}
            step="1"
            value={maxValue}
            readOnly
          />
        </div>
      </div>
      <div className="filter-block__range-input">
        <div
          className="filter-block__slider-track"
          style={{
            background: `linear-gradient(to right, #afd0ff ${fillColorPercent[0]}%, #0D6EFD ${fillColorPercent[0]}%, #0D6EFD ${fillColorPercent[1]}%, #afd0ff ${fillColorPercent[1]}%)`
          }}></div>
        <input
          type="range"
          id="min"
          name="min"
          min={startRange}
          max={endRange}
          step="1"
          onChange={(e) => {
            handlerNumberMax(e, 'min');
          }}
          value={minValue}
        />
        <input
          type="range"
          id="max"
          name="max"
          min={startRange}
          max={endRange}
          step="1"
          onChange={(e) => {
            handlerNumberMax(e, 'max');
          }}
          value={maxValue}
        />
      </div>
      <div className="filter-block__title-block brands">
        <span className="filter-block__title">Brands</span>
        <button className="filter-block__apply mob">Apply</button>
      </div>
      <div className="filter-block__check-row">
        <label htmlFor="samsung">Samsung</label>
        <input type="checkbox" id="samsung" name="samsung" />
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

      <button className="filter-block__apply-laptop laptop">Apply</button>
      <button className="filter-block__reset laptop">Reset filter</button>
    </div>
  );
};

export default Filter;

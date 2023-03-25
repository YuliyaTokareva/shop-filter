import React, { useState } from 'react';
import { dataCheckbox, startRange, endRange, fillColor, brandToFilter } from '../../../filterData';
import './filter.scss';

const Filter = ({ setPriceParam, setBrandParam }) => {
  const [checkboxStatus, setCheckboxStatus] = useState(dataCheckbox);
  const [minValue, setMinValue] = useState(startRange);
  const [maxValue, setMaxValue] = useState(endRange);
  const [fillColorPercent, setFillColorPercent] = useState([0, 100]);

  const handleChange = (event) => {
    const { name, checked } = event.target;

    setCheckboxStatus({
      ...checkboxStatus,
      [name]: checked
    });
  };

  const handlerResetFilter = () => {
    setPriceParam([startRange, endRange]);
    setBrandParam([]);
    setMinValue(startRange);
    setMaxValue(endRange);
    setFillColorPercent([0, 100]);
    setCheckboxStatus(dataCheckbox);
  };
  const handlerSubmit = () => {
    setPriceParam([minValue, maxValue]);
    setBrandParam(brandToFilter(checkboxStatus));
  };

  const handlerNumber = (e, typeValue) => {
    let newVal = Number(e.target.value);

    switch (typeValue) {
      case 'max':
        if (newVal - minValue <= 150) {
          setMaxValue(minValue + 1);
          fillColor(setFillColorPercent, minValue, maxValue);
          return;
        } else {
          setMaxValue(newVal);
          fillColor(setFillColorPercent, minValue, maxValue);
          return;
        }

      case 'min':
        if (maxValue - newVal <= 150) {
          setMinValue(maxValue - 1);
          fillColor(setFillColorPercent, minValue, maxValue);
          return;
        } else {
          setMinValue(newVal);
          fillColor(setFillColorPercent, minValue, maxValue);
          return;
        }
    }
  };

  return (
    <div className="filter-block">
      <button className="filter-block__reset mob" onClick={() => handlerResetFilter()}>
        Reset filter
      </button>
      <div className="filter-all-prise">
        <div className="filter-block__title-block">
          <span className="filter-block__title">Price range, $</span>
          <button className="filter-block__apply mob" onClick={() => handlerSubmit()}>
            Apply
          </button>
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
              handlerNumber(e, 'min');
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
              handlerNumber(e, 'max');
            }}
            value={maxValue}
          />
        </div>
      </div>
      <div className="filter-all-brands">
        <div className="filter-block__title-block brands">
          <span className="filter-block__title">Brands</span>
          <button className="filter-block__apply mob" onClick={() => handlerSubmit()}>
            Apply
          </button>
        </div>
        <div className="filter-block__check-row">
          <label htmlFor="samsung">Samsung</label>
          <input
            type="checkbox"
            id="samsung"
            name="samsung"
            checked={checkboxStatus.samsung ? true : false}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="filter-block__check-row">
          <label htmlFor="apple">Apple</label>
          <input
            type="checkbox"
            id="apple"
            name="apple"
            checked={checkboxStatus.apple ? true : false}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="filter-block__check-row">
          <label htmlFor="huawei">Huawei</label>
          <input
            type="checkbox"
            id="huawei"
            name="huawei"
            checked={checkboxStatus.huawei ? true : false}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="filter-block__check-row">
          <label htmlFor="pocco">Pocco</label>
          <input
            type="checkbox"
            id="pocco"
            name="pocco"
            checked={checkboxStatus.pocco ? true : false}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="filter-block__check-row">
          <label htmlFor="lenovo">Lenovo</label>
          <input
            type="checkbox"
            id="lenovo"
            name="lenovo"
            checked={checkboxStatus.lenovo ? true : false}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="filter-all-button-send">
        <button className="filter-block__apply-laptop laptop" onClick={() => handlerSubmit()}>
          Apply
        </button>
        <button className="filter-block__reset laptop" onClick={() => handlerResetFilter()}>
          Reset filter
        </button>
      </div>
    </div>
  );
};

export default Filter;

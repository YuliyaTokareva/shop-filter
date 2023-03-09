import React from 'react';

import './filter.scss';

const Filter = () => {
  return (
    <div className="filter">
      <button>Reset filter</button>
      <div>
        <span>Price range, $</span>
        <button>Apply</button>
      </div>
      <div>
        <label for="min">Min</label>
        <input type="number" id="min" name="min" min="150" max="3000" />
      </div>
      <div>
        <label for="max">Max</label>
        <input type="number" id="max" name="max" min="150" max="3000" />
      </div>
      <div>
        <input type="range" id="volume" name="volume" min="150" max="3000" />
      </div>
      <div>
        <span>Brands</span>
        <button>Apply</button>
      </div>
      <div>
        <label for="samsung">Samsung</label>
        <input type="checkbox" id="samsung" name="samsung" checked />
      </div>
      <div>
        <label for="apple">Apple</label>
        <input type="checkbox" id="apple" name="apple" />
      </div>
      <div>
        <label for="huawei">Huawei</label>
        <input type="checkbox" id="huawei" name="huawei" />
      </div>
      <div>
        <label for="pocco">Pocco</label>
        <input type="checkbox" id="pocco" name="pocco" />
      </div>
      <div>
        <label for="lenovo">Lenovo</label>
        <input type="checkbox" id="lenovo" name="lenovo" />
      </div>
    </div>
  );
};

export default Filter;

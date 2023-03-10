import * as React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ProductPage from './shop/components/productPage/ProductPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

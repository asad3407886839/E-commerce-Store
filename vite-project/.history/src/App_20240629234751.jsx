import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductD from './components/ProductD';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products" element={<ProductD />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

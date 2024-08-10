// src/App.jsx

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import LoginForm from './components/LoginForm';
import Register from './components/Register';
import Footer from './components/Footer';
import Cart from './components/Cart'; // Import Cart component

const App = () => {
  const [cart, setCart] = useState([]); // State for managing cart items

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart cart={cart} />} /> {/* Pass cart data to Cart component */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
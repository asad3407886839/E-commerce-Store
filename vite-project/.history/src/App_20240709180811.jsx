import React from 'react';
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
import Cart from './components/Cart';
import Checkout from './components/Checkout'; // Assuming Checkout component is implemented
import { CartProvider } from './CartContext'; // Import CartProvider

const App = () => {
  return (
    <CartProvider>
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
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartProvider>
  );
};

export default App;

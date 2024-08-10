// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import AboutUs from './AboutUs';
import LoginForm from './LoginForm';
import Register from './Register';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />y
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/register" element={<Register/>} />


  
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;

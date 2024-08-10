import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/'element="{<Home/>}"/>
      <Route path='/products'element="{<Products/>}"/>
      <Route path='/products/:id'element="{<Products/>}"/>
      <Route path='/about'element="{<Home/>}"/>
      <Route path='/contact'element="{<Home/>
        
      }
     </Routes>
     </BrowserRouter>
    </div>
  );
};

export default App;

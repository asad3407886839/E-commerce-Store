import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import {  Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Products/>
    </div>
  )
}

export default App
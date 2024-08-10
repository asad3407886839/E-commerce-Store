import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'

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
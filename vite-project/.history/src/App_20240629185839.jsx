import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import {  Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar/>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Products" component={Products} />
    {/*     <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} /> */}
       
      </Switch>
    </div>
  )
}

export default App
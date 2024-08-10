import React, { useState } from 'react';

const AddToCart = ({ product }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    setCart([...cart, product]); // Add the product to local cart state
    alert('Product added to cart!');
  };

  return (
    <div className="add-to-cart">
      <button onClick={handleAddToCart} className="btn btn-outline-dark">
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;

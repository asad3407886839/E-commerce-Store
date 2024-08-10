import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../CartContext'; // Import CartContext

const Product = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useContext(CartContext); // Access addToCart function and cartItems from CartContext
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1); // State for product quantity

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const result = await response.json();
        setProduct(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    // Check if the product is already in the cart
    const isInCart = cartItems.find(item => item.id === product.id);
    if (isInCart) {
      alert('This product is already in your cart!');
    } else {
      // Add the product with its quantity to the cart
      addToCart({ ...product, quantity });
      alert('Product added to cart successfully!');
    }
  };

  const handleQuantityChange = (amount) => {
    // Increase or decrease the quantity of the product
    if (amount === 'increase') {
      setQuantity(prevQuantity => prevQuantity + 1);
    } else if (amount === 'decrease' && quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container my-5 py-5">
      <div className="row py-5">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <div className="d-flex align-items-center">
            <button className="btn btn-outline-dark px-4 py-2 me-2" onClick={() => handleQuantityChange('decrease')}>-</button>
            <input type="number" value={quantity} className="form-control me-2" style={{ width: '70px' }} readOnly />
            <button className="btn btn-outline-dark px-4 py-2 me-2" onClick={() => handleQuantityChange('increase')}>+</button>
            <button className="btn btn-outline-dark px-4 py-2" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

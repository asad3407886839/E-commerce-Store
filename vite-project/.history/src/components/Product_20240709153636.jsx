import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../CartContext'; // Import CartContext

const Product = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useContext(CartContext); // Access addToCart function and cartItems from CartContext
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1); // State for product quantity
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to manage success message

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
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000); // Hide message after 3 seconds
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
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid rounded" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="display-4">{product.title}</h1>
          <p className="lead fw-bold">
            Rating: {product.rating && product.rating.rate} <i className="fa fa-star"></i>
          </p>
          <h3 className="display-5 fw-bold mb-4">${product.price}</h3>
          <p className="lead mb-4">{product.description}</p>
          <div className="d-flex align-items-center">
            <button className="btn btn-dark px-4 py-2" onClick={handleAddToCart}>Add to Cart</button>
          </div>
          {showSuccessMessage && (
            <div className="alert alert-success mt-3" role="alert">
              Product added to cart successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { CartContext } from '../CartContext'; // Import CartContext
import './Cart.css'; // Import CSS file for Cart component

const Cart = () => {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext); // Access cartItems and functions from CartContext

    // Function to handle increasing quantity of an item in cart
    const handleIncrease = (itemId) => {
        increaseQuantity(itemId);
    };

    // Function to handle decreasing quantity of an item in cart
    const handleDecrease = (itemId) => {
        decreaseQuantity(itemId);
    };

    // Function to calculate total price of items in cart
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    return (
        <div className="cart-container my-5">
            <h2 className="text-center mb-4">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
            ) : (
                <div>
                    <ul className="list-unstyled">
                        {cartItems.map(item => (
                            <li key={item.id} className="mb-4">
                                <div className="cart-item d-flex align-items-center">
                                    <div className="cart-image-container">
                                        <img src={item.image} alt={item.title} className="img-fluid rounded" />
                                    </div>
                                    <div className="cart-item-details ms-3">
                                        <h4>{item.title}</h4>
                                        <p>Price: ${item.price}</p>
                                        <div className="d-flex align-items-center">
                                            <button className="btn btn-outline-dark btn-sm me-2" onClick={() => handleDecrease(item.id)}>-</button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <button className="btn btn-outline-dark btn-sm me-2" onClick={() => handleIncrease(item.id)}>+</button>
                                            <button className="btn btn-outline-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <hr />
                    <div className="cart-total text-center">
                        <h4>Total: ${calculateTotal()}</h4>
                        <Link to="/payment" className="btn btn-buy mt-3">Buy Now</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;

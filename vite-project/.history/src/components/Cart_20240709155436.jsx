import React, { useContext } from 'react';
import { CartContext } from '../CartContext'; // Import CartContext
import './Cart.css'; // Import CSS file for Cart component

const Cart = () => {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext); // Access cartItems and functions from CartContext

    const handleIncrease = (itemId) => {
        increaseQuantity(itemId);
    };

    const handleDecrease = (itemId) => {
        decreaseQuantity(itemId);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    const handleBuy = () => {
        // Implement your buy logic here
        alert('Buy functionality will be implemented here!');
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
            ) : (
                <div>
                    <ul className="list-unstyled">
                        {cartItems.map(item => (
                            <li key={item.id} className="mb-4">
                                <div className="cart-item d-flex align-items-center justify-content-center">
                                    <div className="image-container">
                                        <img src={item.image} alt={item.title} className="img-fluid rounded" />
                                    </div>
                                    <div className="ms-3">
                                        <h3>{item.title}</h3>
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
                    <div className="total text-center">
                        <h4>Total: ${calculateTotal()}</h4>
                        <button className="btn btn-buy mt-3" onClick={handleBuy}>Buy Now</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;

import React, { useContext } from 'react';
import { CartContext } from '../CartContext'; // Import CartContext

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

    return (
        <div className="container">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul className="list-unstyled">
                        {cartItems.map(item => (
                            <li key={item.id} className="mb-4">
                                <div className="cart-item d-flex align-items-center">
                                    <div style={{ width: '100px' }}>
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
                    <div className="total">
                        <h4>Total: ${calculateTotal()}</h4>
                    </div>
                    <div className="payment">
                        <h3>Payment Method</h3>
                        {/* Placeholder for payment method form or component */}
                        <p>Payment form or options go here...</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;

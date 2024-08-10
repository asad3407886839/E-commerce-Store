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
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <div className="cart-item">
                                    <h3>{item.title}</h3>
                                    <p>Price: ${item.price}</p>
                                    <div>
                                        <button className="btn btn-outline-dark" onClick={() => handleDecrease(item.id)}>-</button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button className="btn btn-outline-dark" onClick={() => handleIncrease(item.id)}>+</button>
                                        <button className="btn btn-outline-danger ms-2" onClick={() => removeFromCart(item.id)}>Remove</button>
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
                        {/* Add your payment method form or component here */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;

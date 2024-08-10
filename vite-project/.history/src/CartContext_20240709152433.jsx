// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    // Example styling for CartContext
    const cartStyle = {
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '5px',
        marginTop: '20px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            <div style={cartStyle}>
                <h2 style={{ textAlign: 'center' }}>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
                ) : (
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {cartItems.map(item => (
                            <li key={item.id} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>Price: ${item.price}</p>
                                    <button style={{ background: 'none', color: 'red', border: 'none', cursor: 'pointer' }} onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button className="btn btn-outline-dark me-2">Increase Quantity</button>
                    <button className="btn btn-outline-dark me-2">Decrease Quantity</button>
                    <button className="btn btn-outline-dark">Go to Payment</button>
                </div>
            </div>
            {children}
        </CartContext.Provider>
    );
};

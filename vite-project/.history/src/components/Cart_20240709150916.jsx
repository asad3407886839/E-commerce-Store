import React, { useState } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        // Check if the product is already in the cart
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
            // If the item is already in the cart, increase its quantity
            const updatedCartItems = cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedCartItems);
        } else {
            // If it's a new item, add it to the cart with quantity 1
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCartItems);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <div className="container my-5 py-5">
            <h1 className="display-5 text-center mb-4">Shopping Cart</h1>
            <div className="row">
                <div className="col">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <ul className="list-group">
                            {cartItems.map(item => (
                                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    {item.title} - Quantity: {item.quantity}
                                    <button className="btn btn-outline-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className="row mt-4">
                <div className="col text-end">
                    {cartItems.length > 0 && (
                        <>
                            <button className="btn btn-outline-dark me-2" onClick={clearCart}>Clear Cart</button>
                            <button className="btn btn-dark">Checkout</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;

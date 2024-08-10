import React from 'react';

const Cart = ({ cart }) => {
    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    };

    const increaseQuantity = (productId) => {
        const updatedCart = cart.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
    };

    const decreaseQuantity = (productId) => {
        const updatedCart = cart.map(item =>
            item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0); // Remove items with quantity 0

        setCart(updatedCart);
    };

    return (
        <div className="container my-5 py-5">
            <h1 className="display-5 text-center mb-4">Shopping Cart</h1>
            <div className="row">
                <div className="col">
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <ul className="list-group">
                            {cart.map(item => (
                                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    {item.title} - Quantity: {item.quantity}
                                    <div className="btn-group">
                                        <button className="btn btn-outline-dark btn-sm me-2" onClick={() => decreaseQuantity(item.id)}>-</button>
                                        <button className="btn btn-outline-dark btn-sm me-2" onClick={() => increaseQuantity(item.id)}>+</button>
                                        <button className="btn btn-outline-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className="row mt-4">
                <div className="col text-end">
                    {cart.length > 0 && (
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

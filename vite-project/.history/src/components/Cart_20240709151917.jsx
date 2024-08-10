import React, { useContext } from 'react';
import { CartContext } from '../CartContext'; // Import CartContext

const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext); // Access cartItems and removeFromCart from CartContext

    return (
        <div className="container">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <div>
                                <h3>{item.title}</h3>
                                <p>Price: ${item.price}</p>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;

// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../redux/CartContext';

const Cart = () => {
    const { cart } = useContext(CCartContextart);

    return (
        <div>
            <h1>Cart</h1>
            {cart.length === 0 ? (
                <p>No products in the cart.</p>
            ) : (
                <ul>
                    {cart.map((product, index) => (
                        <li key={index}>
                            {product.name} - ${product.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;

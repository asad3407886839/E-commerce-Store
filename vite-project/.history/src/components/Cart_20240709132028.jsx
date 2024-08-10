// Cart.jsx
import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div className="container">
            <h2>Cart</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        <div>{item.title}</div>
                        <div>Price: ${item.price}</div>
                        {/* Add more details as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;

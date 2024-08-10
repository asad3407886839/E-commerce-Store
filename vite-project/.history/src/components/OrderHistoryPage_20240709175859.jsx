import React, { useState } from 'react';

const OrderHistoryPage = () => {
    // Simulated order history data
    const orders = [
        { id: 1, date: '2024-07-10', total: 150.0, status: 'Delivered', items: [{ name: 'Product A', price: 50.0, quantity: 2 }, { name: 'Product B', price: 50.0, quantity: 1 }] },
        { id: 2, date: '2024-07-09', total: 200.0, status: 'Processing', items: [{ name: 'Product C', price: 100.0, quantity: 1 }] },
        // Add more orders as needed
    ];

    const [selectedOrder, setSelectedOrder] = useState(null);

    // Function to handle clicking on an order to show details
    const handleOrderClick = (orderId) => {
        if (selectedOrder === orderId) {
            setSelectedOrder(null); // Collapse if already selected
        } else {
            setSelectedOrder(orderId);
        }
    };

    return (
        <div className="container">
            <h2 className="my-4">Order History</h2>
            <div className="list-group">
                {orders.map(order => (
                    <div key={order.id} className="list-group-item">
                        <div className="d-flex w-100 justify-content-between" onClick={() => handleOrderClick(order.id)}>
                            <h5 className="mb-1">Order ID: {order.id}</h5>
                            <small>{order.date}</small>
                        </div>
                        {selectedOrder === order.id && (
                            <div className="order-details">
                                <p className="mb-1">Total: ${order.total.toFixed(2)}</p>
                                <small>Status: {order.status}</small>
                                <ul className="list-group mt-2">
                                    {order.items.map((item, index) => (
                                        <li key={index} className="list-group-item">
                                            <div className="d-flex w-100 justify-content-between">
                                                <p className="mb-1">{item.name}</p>
                                                <p className="mb-1">${item.price.toFixed(2)}</p>
                                                <p className="mb-1">Quantity: {item.quantity}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderHistoryPage;

import React from 'react';

const OrderHistoryPage = () => {
    // You can fetch order history data here or simulate it with dummy data
    const orders = [
        { id: 1, date: '2024-07-10', total: 150.0, status: 'Delivered' },
        { id: 2, date: '2024-07-09', total: 200.0, status: 'Processing' },
        // Add more orders as needed
    ];

    return (
        <div className="container">
            <h2 className="my-4">Order History</h2>
            <div className="list-group">
                {orders.map(order => (
                    <div key={order.id} className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Order ID: {order.id}</h5>
                            <small>{order.date}</small>
                        </div>
                        <p className="mb-1">Total: ${order.total.toFixed(2)}</p>
                        <small>Status: {order.status}</small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderHistoryPage;

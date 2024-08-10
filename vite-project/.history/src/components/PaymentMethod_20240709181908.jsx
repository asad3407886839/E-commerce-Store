// PaymentMethod.jsx
import React from 'react';
import './PaymentMethod.css'; // Import custom CSS for PaymentMethod component

const PaymentMethod = () => {
    return (
        <div className="container">
            <h2 className="text-center mb-4">Select Payment Method</h2>
            <div className="payment-options">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Bank Transfer</h4>
                        <p className="card-text">Transfer amount to the following bank account:</p>
                        <ul className="list-unstyled">
                            <li><strong>Bank:</strong> Example Bank</li>
                            <li><strong>Account Number:</strong> 123456789</li>
                            <li><strong>Account Name:</strong> Your Name</li>
                            <li><strong>Reference:</strong> Your Order ID</li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Cash on Delivery</h4>
                        <p className="card-text">Pay cash when your order is delivered to your doorstep.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">EasyPaisa</h4>
                        <p className="card-text">Use EasyPaisa for online payment:</p>
                        <ul className="list-unstyled">
                            <li><strong>EasyPaisa Number:</strong> 0300-1234567</li>
                            <li><strong>Account Name:</strong> Your Name</li>
                            <li><strong>Reference:</strong> Your Order ID</li>
                        </ul>
                    </div>
                </div>
                {/* Add more payment options as needed */}
            </div>
        </div>
    );
};

export default PaymentMethod;

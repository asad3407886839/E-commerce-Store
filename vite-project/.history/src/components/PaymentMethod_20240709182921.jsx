import React, { useState } from 'react';
import './PaymentMethod.css';

const PaymentMethod = () => {
    const [selectedMethod, setSelectedMethod] = useState('');
    const [paymentDetails, setPaymentDetails] = useState({
        bank: '',
        accountNumber: '',
        accountName: '',
        reference: '',
        easypaisaNumber: '',
        easypaisaReference: ''
    });
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const handleMethodChange = (method) => {
        setSelectedMethod(method);
        setOrderConfirmed(false); // Reset order confirmation when method changes
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    const handleConfirm = () => {
        setOrderConfirmed(true);
    };

    return (
        <div className="container">
            <h2 className="text-center mb-4">Select Payment Method</h2>
            <div className="payment-options">
                <div className={`card ${selectedMethod === 'bank' ? 'selected' : ''}`} onClick={() => handleMethodChange('bank')}>
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
                <div className={`card ${selectedMethod === 'cod' ? 'selected' : ''}`} onClick={() => handleMethodChange('cod')}>
                    <div className="card-body">
                        <h4 className="card-title">Cash on Delivery</h4>
                        <p className="card-text">Pay cash when your order is delivered to your doorstep.</p>
                    </div>
                </div>
                <div className={`card ${selectedMethod === 'easypaisa' ? 'selected' : ''}`} onClick={() => handleMethodChange('easypaisa')}>
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
            </div>

            {selectedMethod === 'bank' && (
                <div className="payment-details">
                    <h4 className="text-center mt-4">Enter Bank Transfer Details</h4>
                    <input
                        type="text"
                        name="bank"
                        placeholder="Bank"
                        value={paymentDetails.bank}
                        onChange={handleInputChange}
                        className="form-control my-2"
                    />
                    <input
                        type="text"
                        name="accountNumber"
                        placeholder="Account Number"
                        value={paymentDetails.accountNumber}
                        onChange={handleInputChange}
                        className="form-control my-2"
                    />
                    <input
                        type="text"
                        name="accountName"
                        placeholder="Account Name"
                        value={paymentDetails.accountName}
                        onChange={handleInputChange}
                        className="form-control my-2"
                    />
                    <input
                        type="text"
                        name="reference"
                        placeholder="Reference"
                        value={paymentDetails.reference}
                        onChange={handleInputChange}
                        className="form-control my-2"
                    />
                </div>
            )}

            {selectedMethod === 'easypaisa' && (
                <div className="payment-details">
                    <h4 className="text-center mt-4">Enter EasyPaisa Details</h4>
                    <input
                        type="text"
                        name="easypaisaNumber"
                        placeholder="EasyPaisa Number"
                        value={paymentDetails.easypaisaNumber}
                        onChange={handleInputChange}
                        className="form-control my-2"
                    />
                    <input
                        type="text"
                        name="easypaisaReference"
                        placeholder="Reference"
                        value={paymentDetails.easypaisaReference}
                        onChange={handleInputChange}
                        className="form-control my-2"
                    />
                </div>
            )}

            {selectedMethod && (
                <div className="text-center mt-4">
                    <button className="btn btn-confirm" onClick={handleConfirm}>Confirm Order</button>
                </div>
            )}

            {orderConfirmed && (
                <div className="order-confirmation text-center mt-4">
                    <h4>Your order has been confirmed successfully!</h4>
                </div>
            )}
        </div>
    );
};

export default PaymentMethod;

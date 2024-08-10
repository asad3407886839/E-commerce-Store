import React, { useState } from 'react';
import './PaymentMethod.css'; // Import custom CSS for PaymentMethod component

const PaymentMethod = () => {
    const [selectedMethod, setSelectedMethod] = useState('');
    const [paymentDetails, setPaymentDetails] = useState({
        bank: '',
        accountNumber: '',
        accountName: '',
        reference: '',
        easypaisaNumber: '',
        easypaisaReference: '',
        sadapayNumber: '',
        sadapayReference: ''
    });
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const handleMethodChange = (method) => {
        setSelectedMethod(method);
        setOrderConfirmed(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    const handleConfirm = () => {
        if (selectedMethod === 'bank' && (!paymentDetails.bank || !paymentDetails.accountNumber || !paymentDetails.accountName || !paymentDetails.reference)) {
            alert('Please fill in all bank details.');
            return;
        }
        if (selectedMethod === 'easypaisa' && (!paymentDetails.easypaisaNumber || !paymentDetails.easypaisaReference)) {
            alert('Please fill in all EasyPaisa details.');
            return;
        }
        if (selectedMethod === 'sadapay' && (!paymentDetails.sadapayNumber || !paymentDetails.sadapayReference)) {
            alert('Please fill in all SadaPay details.');
            return;
        }
        setOrderConfirmed(true);
    };

    return (
        <div className="payment-container">
            <h2 className="text-center mb-4">Select Payment Method</h2>
            <div className="payment-options d-flex justify-content-between">
                <div className={`payment-card ${selectedMethod === 'bank' ? 'selected' : ''}`} onClick={() => handleMethodChange('bank')}>
                    <div className="payment-card-body">
                        <h4 className="payment-card-title">Bank Transfer</h4>
                        <p className="payment-card-text">Transfer amount to the following bank account:</p>
                        <ul className="list-unstyled">
                            <li><strong>Bank:</strong> Example Bank</li>
                            <li><strong>Account Number:</strong> 123456789</li>
                            <li><strong>Account Name:</strong> Your Name</li>
                            <li><strong>Reference:</strong> Your Order ID</li>
                        </ul>
                    </div>
                </div>
                <div className={`payment-card ${selectedMethod === 'cod' ? 'selected' : ''}`} onClick={() => handleMethodChange('cod')}>
                    <div className="payment-card-body">
                        <h4 className="payment-card-title">Cash on Delivery</h4>
                        <p className="payment-card-text">Pay cash when your order is delivered to your doorstep.</p>
                    </div>
                </div>
                <div className={`payment-card ${selectedMethod === 'easypaisa' ? 'selected' : ''}`} onClick={() => handleMethodChange('easypaisa')}>
                    <div className="payment-card-body">
                        <h4 className="payment-card-title">EasyPaisa</h4>
                        <p className="payment-card-text">Use EasyPaisa for online payment:</p>
                        <ul className="list-unstyled">
                            <li><strong>EasyPaisa Number:</strong> 0300-1234567</li>
                            <li><strong>Account Name:</strong> Your Name</li>
                            <li><strong>Reference:</strong> Your Order ID</li>
                        </ul>
                    </div>
                </div>
                <div className={`payment-card ${selectedMethod === 'sadapay' ? 'selected' : ''}`} onClick={() => handleMethodChange('sadapay')}>
                    <div className="payment-card-body">
                        <h4 className="payment-card-title">SadaPay</h4>
                        <p className="payment-card-text">Use SadaPay for online payment:</p>
                        <ul className="list-unstyled">
                            <li><strong>SadaPay Number:</strong> 0300-9876543</li>
                            <li><strong>Account Name:</strong> Your Name</li>
                            <li><strong>Reference:</strong> Your Order ID</li>
                        </ul>
                    </div>
                </div>
            </div>

            {selectedMethod === 'bank' && (
                <div className="payment-details">
                    <h4 className="text-center mt-4">Enter Bank Details</h4>
                    <div className="form-group">
                        <label htmlFor="bank">Bank</label>
                        <input
                            type="text"
                            id="bank"
                            name="bank"
                            value={paymentDetails.bank}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="accountNumber">Account Number</label>
                        <input
                            type="text"
                            id="accountNumber"
                            name="accountNumber"
                            value={paymentDetails.accountNumber}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="accountName">Account Name</label>
                        <input
                            type="text"
                            id="accountName"
                            name="accountName"
                            value={paymentDetails.accountName}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reference">Reference</label>
                        <input
                            type="text"
                            id="reference"
                            name="reference"
                            value={paymentDetails.reference}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                </div>
            )}

            {selectedMethod === 'easypaisa' && (
                <div className="payment-details">
                    <h4 className="text-center mt-4">Enter EasyPaisa Details</h4>
                    <div className="form-group">
                        <label htmlFor="easypaisaNumber">EasyPaisa Number</label>
                        <input
                            type="text"
                            id="easypaisaNumber"
                            name="easypaisaNumber"
                            value={paymentDetails.easypaisaNumber}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="easypaisaReference">Reference</label>
                        <input
                            type="text"
                            id="easypaisaReference"
                            name="easypaisaReference"
                            value={paymentDetails.easypaisaReference}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                </div>
            )}

            {selectedMethod === 'sadapay' && (
                <div className="payment-details">
                    <h4 className="text-center mt-4">Enter SadaPay Details</h4>
                    <div className="form-group">
                        <label htmlFor="sadapayNumber">SadaPay Number</label>
                        <input
                            type="text"
                            id="sadapayNumber"
                            name="sadapayNumber"
                            value={paymentDetails.sadapayNumber}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sadapayReference">Reference</label>
                        <input
                            type="text"
                            id="sadapayReference"
                            name="sadapayReference"
                            value={paymentDetails.sadapayReference}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                </div>
            )}

            {selectedMethod && (
                <div className="text-center mt-4">
                    <button className="btn btn-primary" onClick={handleConfirm}>Confirm Order</button>
                </div>
            )}

            {orderConfirmed && (
                <div className="alert alert-success mt-4" role="alert">
                    Your order has been confirmed!
                </div>
            )}
        </div>
    );
};

export default PaymentMethod;

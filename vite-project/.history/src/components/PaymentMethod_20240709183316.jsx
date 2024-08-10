import React, { useState } from 'react';
import './PaymentMethod.css';
import { FaMoneyBillWave, FaUniversity, FaMobileAlt } from 'react-icons/fa';

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
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    const handleConfirm = () => {
        setOrderConfirmed(true);
    };

    return (
        <div className="payment-container">
            <h2 className="text-center mb-4">Select Payment Method</h2>
            <div className="payment-options">
                <div className={`payment-card ${selectedMethod === 'bank' ? 'selected' : ''}`} onClick={() => handleMethodChange('bank')}>
                    <div className="card-icon">
                        <FaUniversity size={40} />
                    </div>
                    <div className="card-content">
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
                <div className={`payment-card ${selectedMethod === 'cod' ? 'selected' : ''}`} onClick={() => handleMethodChange('cod')}>
                    <div className="card-icon">
                        <FaMoneyBillWave size={40} />
                    </div>
                    <div className="card-content">
                        <h4 className="card-title">Cash on Delivery</h4>
                        <p className="card-text">Pay cash when your order is delivered to your doorstep.</p>
                    </div>
                </div>
                <div className={`payment-card ${selectedMethod === 'easypaisa' ? 'selected' : ''}`} onClick={() => handleMethodChange('easypaisa')}>
                    <div className="card-icon">
                        <FaMobileAlt size={40} />
                    </div>
                    <div className="card-content">
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
                    <div className="form-group">
                        <label>Bank</label>
                        <input type="text" name="bank" value={paymentDetails.bank} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Account Number</label>
                        <input type="text" name="accountNumber" value={paymentDetails.accountNumber} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Account Name</label>
                        <input type="text" name="accountName" value={paymentDetails.accountName} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Reference</label>
                        <input type="text" name="reference" value={paymentDetails.reference} onChange={handleInputChange} />
                    </div>
                </div>
            )}

            {selectedMethod === 'easypaisa' && (
                <div className="payment-details">
                    <h4 className="text-center mt-4">Enter EasyPaisa Details</h4>
                    <div className="form-group">
                        <label>EasyPaisa Number</label>
                        <input type="text" name="easypaisaNumber" value={paymentDetails.easypaisaNumber} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Reference</label>
                        <input type="text" name="easypaisaReference" value={paymentDetails.easypaisaReference} onChange={handleInputChange} />
                    </div>
                </div>
            )}

            {orderConfirmed && (
                <div className="order-confirmation">
                    <h4 className="text-center mt-4">Your order has been successfully confirmed!</h4>
                </div>
            )}

            {!orderConfirmed && selectedMethod && (
                <div className="confirm-button-container">
                    <button className="btn btn-confirm" onClick={handleConfirm}>Confirm Order</button>
                </div>
            )}
        </div>
    );
};

export default PaymentMethod;

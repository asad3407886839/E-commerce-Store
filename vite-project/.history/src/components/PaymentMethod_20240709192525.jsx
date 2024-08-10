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
    const [addressDetails, setAddressDetails] = useState({
        address: '',
        city: '',
        postalCode: ''
    });

    const handleMethodChange = (method) => {
        setSelectedMethod(method);
        setOrderConfirmed(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setAddressDetails({ ...addressDetails, [name]: value });
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
                {/* Payment options */}
            </div>

            {/* Payment details form based on selectedMethod */}
            {selectedMethod === 'bank' && (
                <div className="payment-details">
                    <h4 className="text-center mt-4">Enter Bank Details</h4>
                    {/* Bank details form inputs */}
                </div>
            )}

            {selectedMethod === 'easypaisa' && (
                <div className="payment-details">
                    <h4 className="text-center mt-4">Enter EasyPaisa Details</h4>
                    {/* EasyPaisa details form inputs */}
                </div>
            )}

            {selectedMethod === 'sadapay' && (
                <div className="payment-details">
                    <h4 className="text-center mt-4">Enter SadaPay Details</h4>
                    {/* SadaPay details form inputs */}
                </div>
            )}

            {/* Address details after confirming payment */}
            {orderConfirmed && (
                <div className="address-details">
                    <h3 className="text-center mt-4">Enter Address Details</h3>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={addressDetails.address}
                            onChange={handleAddressChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={addressDetails.city}
                            onChange={handleAddressChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postalCode">Postal Code</label>
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={addressDetails.postalCode}
                            onChange={handleAddressChange}
                            className="form-control"
                        />
                    </div>
                </div>
            )}

            {/* Confirm Order button */}
            {selectedMethod && (
                <div className="text-center mt-4">
                    <button className="btn btn-primary" onClick={handleConfirm}>
                        {orderConfirmed ? 'Order Confirmed!' : 'Confirm Order'}
                    </button>
                </div>
            )}

            {/* Order confirmation message */}
            {orderConfirmed && (
                <div className="alert alert-success mt-4" role="alert">
                    Your order has been confirmed!
                </div>
            )}
        </div>
    );
};

export default PaymentMethod;

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
        easypaisaReference: ''
    });
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const [addressDetails, setAddressDetails] = useState({
        address: '',
        city: '',
        postalCode: ''
    });
    const [paymentScreenshot, setPaymentScreenshot] = useState(null);

    const handleMethodChange = (method) => {
        setSelectedMethod(method);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setAddressDetails({ ...addressDetails, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setPaymentScreenshot(file);
    };

    const handleConfirm = () => {
        setOrderConfirmed(true);
    };

    return (
        <div className="payment-container">
            <h2 className="text-center mb-4">Select Payment Method</h2>
            {/* Payment options */}
            {/* Payment details form based on selectedMethod */}
            {/* Confirm Order button */}
            {selectedMethod && (
                <div className="text-center mt-4">
                    <button className={`btn ${orderConfirmed ? 'btn-confirmed' : 'btn-primary'}`} onClick={handleConfirm}>
                        {orderConfirmed ? 'Order Confirmed!' : 'Confirm Order'}
                    </button>
                </div>
            )}

            {/* Address details after confirming payment */}
            {orderConfirmed && (
                <div className="payment-details">
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
                    <div className="form-group">
                        <label htmlFor="paymentScreenshot">Upload Payment Screenshot</label>
                        <input
                            type="file"
                            id="paymentScreenshot"
                            name="paymentScreenshot"
                            onChange={handleFileChange}
                            className="form-control-file"
                        />
                    </div>
                </div>
            )}

            {/* Order confirmation message */}
            {orderConfirmed && (
                <div className="text-center mt-4">
                    <p>Thank you for your payment!</p>
                    <p>Address: {addressDetails.address}, {addressDetails.city}, {addressDetails.postalCode}</p>
                    {paymentScreenshot && (
                        <div>
                            <p>Payment Screenshot:</p>
                            <img src={URL.createObjectURL(paymentScreenshot)} alt="Payment Screenshot" style={{ maxWidth: '100%' }} />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default PaymentMethod;

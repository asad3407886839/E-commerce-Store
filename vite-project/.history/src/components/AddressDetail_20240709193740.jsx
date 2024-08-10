import React, { useState } from 'react';
import './AddressDetail.css'; // Import custom CSS for AddressDetail component

const AddressDetail = ({ onConfirm }) => {
    const [addressDetails, setAddressDetails] = useState({
        name: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddressDetails({ ...addressDetails, [name]: value });
    };

    const handleConfirm = () => {
        onConfirm(addressDetails);
    };

    return (
        <div className="address-detail-container">
            <h4 className="text-center mt-4">Enter Address Details</h4>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={addressDetails.name}
                    onChange={handleInputChange}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="street">Street</label>
                <input
                    type="text"
                    id="street"
                    name="street"
                    value={addressDetails.street}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    value={addressDetails.state}
                    onChange={handleInputChange}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="zip">Zip</label>
                <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={addressDetails.zip}
                    onChange={handleInputChange}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="country">Country</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={addressDetails.country}
                    onChange={handleInputChange}
                    className="form-control"
                />
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-primary" onClick={handleConfirm}>Confirm Address</button>
            </div>
        </div>
    );
};

export default AddressDetail;

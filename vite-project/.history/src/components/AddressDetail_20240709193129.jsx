import React from 'react';

const AddressDetail = ({ address, setAddress }) => {
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    return (
        <div className="form-group">
            <label htmlFor="address">Enter Your Address</label>
            <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={handleAddressChange}
                className="form-control"
            />
        </div>
    );
};

export default AddressDetail;

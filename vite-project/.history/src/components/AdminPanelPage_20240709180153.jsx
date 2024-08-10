// components/AdminPanelPage.jsx
import React from 'react';

const AdminPanelPage = () => {
    return (
        <div className="container">
            <h2 className="my-4">Admin Panel</h2>
            <div className="row">
                {/* Product Management Section */}
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Product Management</h5>
                            <p className="card-text">Manage products here...</p>
                            <a href="#" className="btn btn-primary">Manage Products</a>
                        </div>
                    </div>
                </div>
                {/* User Management Section */}
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">User Management</h5>
                            <p className="card-text">Manage users here...</p>
                            <a href="#" className="btn btn-primary">Manage Users</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanelPage;

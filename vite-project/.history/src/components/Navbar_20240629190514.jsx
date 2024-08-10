import React from 'react';
import { <Navlink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Navlink className="navbar-brand fw-bold fs-4" to="#">MY STORE</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > 
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Navlink className="nav-link active" aria-current="page" to="/">Home</a>
              </li>
              <li className="nav-item">
                <Navlink className="nav-link" to="/Products">Product</a>
              </li>
              <li className="nav-item">
                <Navlink className="nav-link" aria-current="page" to="/About">About</a>
              </li>
              <li className="nav-item">
                <Navlink className="nav-link" aria-current="page" to="/Contact">Contact</a>
              </li>
            </ul>
            <div className="buttons">
              <Navlink to="" className="btn btn-outline-dark">
                <i className="fa fa-sign-in"></i> Login
              </a>
              <Navlink to="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus"></i> Register
              </a>
              <Navlink to="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart"></i> Cart
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

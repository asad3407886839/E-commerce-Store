// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3">
            <h5>Company Name</h5>
            <p>A brief description of the company.</p>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/shipping">Shipping Information</Link></li>
              <li><Link to="/returns">Returns & Refunds</Link></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Contact Us</h5>
            <p>123 Street, City, Country<br />Phone: +123456789<br />Email: info@example.com</p>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

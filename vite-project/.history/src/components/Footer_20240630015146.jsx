// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#343a40',
    color: '#fff',
    padding: '60px 0',
  };

  const listStyle = {
    padding: 0,
    listStyle: 'none',
  };

  const listItemStyle = {
    marginBottom: '10px',
  };

  const socialIconsStyle = {
    display: 'inline-block',
    marginRight: '10px',
  };

  const socialIconLinkStyle = {
    color: '#fff',
    fontSize: '24px',
  };

  const socialIconLinkHoverStyle = {
    color: '#ffc107',
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h5>Company Name</h5>
            <p>A brief description of the company.</p>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul style={listStyle}>
              <li style={listItemStyle}><Link to="/" className="text-light">Home</Link></li>
              <li style={listItemStyle}><Link to="/products" className="text-light">Products</Link></li>
              <li style={listItemStyle}><Link to="/about" className="text-light">About Us</Link></li>
              <li style={listItemStyle}><Link to="/contact" className="text-light">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Customer Service</h5>
            <ul style={listStyle}>
              <li style={listItemStyle}><Link to="/faq" className="text-light">FAQ</Link></li>
              <li style={listItemStyle}><Link to="/shipping" className="text-light">Shipping Information</Link></li>
              <li style={listItemStyle}><Link to="/returns" className="text-light">Returns & Refunds</Link></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <p>123 Street, City, Country<br />Phone: +123456789<br />Email: info@example.com</p>
            <ul className="list-inline" style={listStyle}>
              <li className="list-inline-item" style={socialIconsStyle}><a href="#" style={socialIconLinkStyle}><i className="fab fa-facebook"></i></a></li>
              <li className="list-inline-item" style={socialIconsStyle}><a href="#" style={socialIconLinkStyle}><i className="fab fa-twitter"></i></a></li>
              <li className="list-inline-item" style={socialIconsStyle}><a href="#" style={socialIconLinkStyle}><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

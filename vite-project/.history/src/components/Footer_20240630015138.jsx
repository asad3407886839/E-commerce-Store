import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline social-icons">
              <li className="list-inline-item">
                <a href="https://facebook.com">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://instagram.com">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

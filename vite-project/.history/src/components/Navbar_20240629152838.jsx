import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">MY STORE</a>
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
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contact</a>
              </li>
             
            </ul>
         
             <div className="buttons">
                <a href="" className="btn btn-outline-dark">
                <i className="fa-duotone fa-right-to-bracket"></i>login
                </a>
                <a href="" className="btn btn-outline-dark ms-2">
                <i className="fa-duotone fa-right-to-bracket"></i>Register
                </a>
                <a href="" className="btn btn-outline-dark ms-2">
                <i className="fa-duotone fa-right-to-bracket"></i>cart
                </a>
             </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

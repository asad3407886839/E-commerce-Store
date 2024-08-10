import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-12 text-center py-4 my-4">
          <h1>Have Some Questions?</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 d-flex justify-content-center align-items-center">
          <img src="https://avatars.mds.yandex.net/i?id=d19b1794870d4bfc015400de61d0a8a2b16c137e0df597a5-11932700-images-thumbs&n=13" alt="Contact Us" height="300px" width="300px" />
        </div>
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleForm" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="exampleForm" placeholder="Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-outline-primary me-2">Send Message</button>
            <Link to="/faq" className="btn btn-outline-secondary">FAQ</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

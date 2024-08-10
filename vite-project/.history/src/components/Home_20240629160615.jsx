import React from 'react';

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-dark bg-light position-relative">
        <img
          src="https://www.martechcube.com/wp-content/uploads/2021/11/Almowafir.jpg"
          className="card-img"
          alt="Card Image"
        />
        <div className="card-img-overlay d-flex align-items-center justify-content-start">
          <div className="container text-start">
            <h5 className="card-title display-3 fw-bold mb-0">NEW SEASON ARRIVAL</h5>
            <p className="card-text text-uppercase">Check Out All Trends</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

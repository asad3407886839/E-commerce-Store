import React from 'react';

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-dark bg-light">
        <img src="https://www.martechcube.com/wp-content/uploads/2021/11/Almowafir.jpg" className="card-img" alt="Card Image" />
        <div className="card-img-overlay d-flex flex-colum justify-content-center ">
         <div className="container">
         <h5 className="card-title display-3 fw-bolder mb-0">NEW OFFERS</h5>
         <p className="card-text text-uppercase">
            Check Out All Trends
          </p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

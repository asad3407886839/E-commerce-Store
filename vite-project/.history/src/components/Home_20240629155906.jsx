import React from 'react';

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-dark bg-light">
        <img src="https://www.martechcube.com/wp-content/uploads/2021/11/Almowafir.jpg" className="card-img" alt="Card Image" />
        <div className="card-img-overlay">
         <div className="container">
         <h5 className="card-title display-3">NEW OFFERS</h5>
         <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="card-text"><small>Last updated 3 mins ago</small></p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-dark bg-light">
        <img src="path_to_your_image.jpg" className="card-img" alt="Card Image" />
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="card-text"><small>Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  );
};

export default Home;

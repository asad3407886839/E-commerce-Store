import React from 'react';
import Products from './Products';
const Home = () => {
  return (
    <div className="hero">
       <div className="card text-white bg-light position-relative m-3 bg-danger" >
       <img
          src="https://avatars.mds.yandex.net/i?id=809e468b8fe5af44dcf5dfa179ede2f2afb290ad-4055677-images-thumbs&n=13"
          className="card-img"
          alt="Card Image"
          style={{ maxHeight: '750px', width: 'auto' }}
        />
        <div className="card-img-overlay d-flex align-items-center justify-content-start">
          <div className="container text-start">
            <h5 className="card-title display-3 fw-bold mb-0 text-white">NEW SEASON ARRIVAL</h5>
            <p className="card-text text-uppercase text-white">Check Out All Trends</p>
          </div>
        </div>
    
      </div>
    <Products/>
    </div>
  );
};

export default Home;
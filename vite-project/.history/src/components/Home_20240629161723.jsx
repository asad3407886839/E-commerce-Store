import React from 'react';

const Home = () => {
  return (
    <div className="hero">
       <div className="card text-white bg-light position-relative" >
       <img
          src="https://avatars.mds.yandex.net/i?id=39f40d791f1f7c86e921481b05da4f674ca95710-12803937-images-thumbs&n=13"
          className="card-img"
          alt="Card Image"
          style={{ maxHeight: '700px', width: 'auto' }}
        />
        <div className="card-img-overlay d-flex align-items-center justify-content-start">
          <div className="container text-start">
            <h5 className="card-title display-3 fw-bold mb-0 text-white">NEW SEASON ARRIVAL</h5>
            <p className="card-text text-uppercase text-white">Check Out All Trends</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';

const AboutUs = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="display-5 mb-4">About Our Company</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero et tempus ultricies, purus urna dignissim lorem, ac convallis dolor mi id lorem.
          </p>
          <p>
            Fusce ultrices vestibulum arcu sit amet facilisis. Donec id dapibus nunc, ut mattis libero. Nulla consectetur suscipit turpis in vehicula.
          </p>
          <p>
            Proin condimentum, lorem ut vehicula faucibus, nibh dolor pharetra risus, sed vestibulum libero risus non arcu.
          </p>
        </div>
        <div className="col-md-6">
          <img src="/assets/images/about-us.jpg" alt="About Us" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

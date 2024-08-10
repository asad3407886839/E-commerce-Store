import React from 'react';

const AboutUs = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="display-5 mb-4">About Our Company</h2>
          <p className="lead">
          Welcome to [Your Company Name], your premier destination for all things Explore our curated collection of high-quality products, handpicked to meet your needs. Whether you're searching for the latest trends in [Product Category] or essential everyday items, we've got you covered. Our mission is to deliver exceptional value and customer satisfaction with every purchase. Join us in transforming your shopping experience with convenience, reliability, and style. Discover more at [Your Website URL] today!
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

import React, { useState, useEffect } from 'react';

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let componentMounted = true;
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        if (componentMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  if (loading) {
    return <div className="mx-5 my-5">Loading...</div>;
  }

  const showProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-3">
          <button className="btn btn-outline-dark me-2">All</button>
          <button className="btn btn-outline-dark me-2">Men's Clothing</button>
          <button className="btn btn-outline-dark me-2">Women's Clothing</button>
          <button className="btn btn-outline-dark me-2">Jewelry</button>
          <button className="btn btn-outline-dark me-2">Electronics</button>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {data.map((product) => (
            <div key={product.id} className="col-12 col-md-4 mb-3">
              <div className="card text-center p-3">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ maxHeight: '250px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <a href="#" className="btn btn-outline-dark">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="container-fluid my-5">
      <h1 className="display-6 fw-bolder text-center mb-4">Latest Products</h1>
      <div className="mx-5 my-5">
        {showProducts()}
      </div>
    </div>
  );
};

export default Products;

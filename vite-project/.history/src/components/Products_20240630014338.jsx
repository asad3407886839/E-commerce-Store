import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddToCart from './AddtoCart';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        if (componentMounted) {
          setData(result);
          setFilter(result);
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
    return <div>Loading...</div>;
  }

  const showProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data.filter(product => product.category === 'men\'s clothing'))}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data.filter(product => product.category === 'women\'s clothing'))}>Women's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data.filter(product => product.category === 'jewelery'))}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data.filter(product => product.category === 'electronics'))}>Electronics</button>
        </div>
        <div className="row">
          {filter.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 text-center p-3 fw-bolder">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <Link to={`/products/${product.id}`} className="btn btn-outline-dark ms-2">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {showProducts()}
      </div>
    </div>
  );
};

export default Products;

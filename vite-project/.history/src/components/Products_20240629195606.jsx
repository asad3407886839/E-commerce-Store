import React, { useState, useEffect } from 'react';

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('All'); // State to track selected category

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

  const filterProducts = (category) => {
    if (category === 'All') {
      setData(result); // Reset to all products
    } else {
      const filteredProducts = result.filter(product => product.category === category);
      setData(filteredProducts);
    }
  };

  const showProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-3">
          <button className="btn btn-outline-dark me-2" onClick={() => filterProducts('All')}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("Men's Clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("Women's Clothing")}>Women's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProducts('Jewelry')}>Jewelry</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProducts('Electronics')}>Electronics</button>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {data.map((product) => (
            <div key={product.id} className="col-12 col-md-3 mb-4 mt-5">
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

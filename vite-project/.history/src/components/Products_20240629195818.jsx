import React, { useState, useEffect } from 'react';

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('All'); // State to track selected category

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = (category) => {
    setCategory(category); // Update selected category
  };

  const filteredProducts = category === 'All' ? data : data.filter(product => product.category === category);

  const showProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-3">
          <button className={`btn btn-outline-dark me-2 ${category === 'All' ? 'active' : ''}`} onClick={() => filterProducts('All')}>All</button>
          <button className={`btn btn-outline-dark me-2 ${category === "Men's Clothing" ? 'active' : ''}`} onClick={() => filterProducts("Men's Clothing")}>Men's Clothing</button>
          <button className={`btn btn-outline-dark me-2 ${category === "Women's Clothing" ? 'active' : ''}`} onClick={() => filterProducts("Women's Clothing")}>Women's Clothing</button>
          <button className={`btn btn-outline-dark me-2 ${category === 'Jewelry' ? 'active' : ''}`} onClick={() => filterProducts('Jewelry')}>Jewelry</button>
          <button className={`btn btn-outline-dark me-2 ${category === 'Electronics' ? 'active' : ''}`} onClick={() => filterProducts('Electronics')}>Electronics</button>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {filteredProducts.map((product) => (
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

  if (loading) {
    return <div className="mx-5 my-5">Loading...</div>;
  }

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

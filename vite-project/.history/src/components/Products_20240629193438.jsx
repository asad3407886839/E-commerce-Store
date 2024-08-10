import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = (category) => {
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category.toLowerCase() === category.toLowerCase()));
    }
  };

  const showProducts = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="col">
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
                <a href="#" className="btn btn-outline-dark">Buy Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container my-5">
      <h1 className="display-6 fw-bold text-center mb-5">Latest Products</h1>

      {/* Category Filter Buttons */}
      <div className="text-center mb-4">
        <button className="btn btn-outline-dark me-2" onClick={() => filterProducts('all')}>All</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("men's clothing")}>Men's Clothing</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("women's clothing")}>Women's Clothing</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProducts('jewelery')}>Jewelry</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProducts('electronics')}>Electronics</button>
      </div>

      {/* Product Display */}
      <div className="row">
        {showProducts()}
      </div>
    </div>
  );
};

export default Products;

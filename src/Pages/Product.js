import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.noksha.dev/api/products')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.data || json);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h2>Our Products</h2>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary"></div>
          <p className="mt-2">Loading products...</p>
        </div>
      ) : (

        /* Product Grid */
        <div className="row g-4">

          {products.map((item) => (

            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              key={item.id}
            >
              <ProductCard
                title={item.title}
                price={item.price}
                image={item.image}
              />
            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default Product;
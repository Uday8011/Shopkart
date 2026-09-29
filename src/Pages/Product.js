import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
function Product() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => { setProducts(data)})
      .catch((error) => console.log("Error: ", error))

  }, [])
  return (
    <div className='products-page'>
        <h2>Products</h2>
      <div className='product-container'>
        {
          products.map((item) => (

            <ProductCard
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}

            ></ProductCard>
          )
          )

        }

      </div>

    </div>
  )
}
export default Product;
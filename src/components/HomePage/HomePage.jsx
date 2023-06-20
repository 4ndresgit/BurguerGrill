import React from 'react';
import ProductListContainer from '../ProductListContainer/ProductListContainer';

function HomePage() {
  const handleAddToCart = (product) => {
    // agregar producto al carrito
    console.log('Producto agregado al carrito:', product);
  };

  return (
    <div>
      <h1>HomePage</h1>
      <ProductListContainer handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default HomePage;

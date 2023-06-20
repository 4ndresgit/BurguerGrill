import './ProductListContainer.scss';
import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import ProductList from '../ProductList/ProductList';
import data from '../../product.json';
import ProductDetail from '../ProductDetail/ProductDetail';

function ProductListContainer({ handleAddToCart }) {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    handleAddToCart(product);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <ProductList>
      {data.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          openModal={openModal}
        />
      ))}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          closeModal={closeModal}
          handleAddToCart={addToCart}
        />
      )}
    </ProductList>
  );
}

export default ProductListContainer;






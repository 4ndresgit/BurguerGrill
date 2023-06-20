import './ProductListContainer.scss';
import React, { useState, useEffect } from 'react';
import ProductService from '../ProductService/ProductService';
import ProductCard from '../ProductCard/ProductCard';

function ProductListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productsData = await ProductService.getProducts();
      setProducts(productsData);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  return (
    <div className='product-list-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductListContainer;









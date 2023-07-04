import React, { useState, useEffect } from 'react';
import ProductService from '../ProductService/ProductService';
import ProductCard from '../ProductCard/ProductCard';
import { useParams } from 'react-router-dom';
import './ProductListContainer.scss'

const ProductListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [categoryId]);

  const fetchProducts = async () => {
    try {
      let productsData;

      if (categoryId) {
        productsData = await ProductService.getProductsByCategory(categoryId);
      } else {
        productsData = await ProductService.getProducts();
      }

      setProducts(productsData);
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  return (
    <div className='product-list-container'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};      

export default ProductListContainer;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductService from '../ProductService/ProductService';
import productData from '../../product.json';
import './ProductDetailPage.scss';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = productData.find((p) => p.id.toString() === productId);
        setProduct(product);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return null; // Otra acción a tomar si el producto no está definido
  }

  const { nombre, descripcion, imagen, precio } = product;

  return (
    <div className='product-detail'>
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p>Precio: {precio}</p>
    </div>
  );
};

export default ProductDetailPage;


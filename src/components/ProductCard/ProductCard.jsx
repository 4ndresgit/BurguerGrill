

import './ProductCard.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, nombre, descripcion, imagen, precio } = product;

  return (
    <div className='product-card'>
      <img src={imagen} alt={nombre} className='product-image' />
      <div className='product-details'>
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <p>{precio}</p>
        <Link to={`/products/${id}`} className='detail-button'>
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;







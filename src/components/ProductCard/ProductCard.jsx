import './ProductCard.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, nombre, descripcion, imagen, precio } = product;

  return (
    <div className='product-card'>
      <div className='image-container'>
        <img src={imagen} alt={nombre} className='product-image' />
      </div>
      <div className='product-details'>
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <p className='price'>
          <strong>${precio}</strong>
        </p>
        <div className='button-container'>
          <Link to={`/products/${id}`} className='button'>
            AGREGAR
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

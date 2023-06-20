/* voy a mostrar informacion del producto como imagen de hamburguesa, nombre, descripcion y precio. Tambien boton 'agregar al carrito'*/

import React from 'react';
import './ProductCard.scss';

function ProductCard({ product, addToCart, openModal }) {
  const { nombre, descripcion, imagen, precio } = product;

  const handleClick = () => {
    addToCart(product);
    openModal(product); 
  };

  return (
    <div className='product-card'>
      <img src={imagen} alt={nombre} />
      <div className='product-details'>
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <p>{precio}</p>
        <button onClick={handleClick}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ProductCard;




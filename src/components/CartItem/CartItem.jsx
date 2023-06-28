/* aca van los productos en el carrito. Imagen, nombre, precio y cantidad. Tambien botones de aumentar/disminuir/eliminar del carrito*/
import React from 'react';
import './CartItem.scss';

const CartItem = ({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
}) => {
  const { id, nombre, precio, cantidad, imagen } = item;

  const handleIncrease = () => {
    increaseQuantity(id);
  };

  const handleDecrease = () => {
    decreaseQuantity(id);
  };

  const handleRemove = () => {
    removeProduct(id);
  };

  return (
    <div className='cart-item'>
      <div className='cart-item-image'>
        <img src={imagen} alt={nombre} />
      </div>
      <div className='cart-item-details'>
        <div className='cart-item-title'>
          <h3>{nombre}</h3>
          <button className='remove-button' onClick={handleRemove}>
            Eliminar
          </button>
        </div>
        <div className='cart-item-description'>
          <p>Precio: ${precio}</p>
          <p>Cantidad: {cantidad}</p>
        </div>
        <div className='cart-item-buttons'>
          <button className='quantity-button' onClick={handleDecrease}>
            -
          </button>
          <button className='quantity-button' onClick={handleIncrease}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;



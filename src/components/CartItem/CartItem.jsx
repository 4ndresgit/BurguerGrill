/* aca van los productos en el carrito. Imagen, nombre, precio y cantidad. Tambien botones de aumentar/disminuir/eliminar del carrito*/

import React from 'react';
import './CartItem.scss'

const CartItem = ({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
}) => {
  const { id, nombre, precio, cantidad } = item;

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
    <div>
      <img src={item.imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <p>Cantidad: {cantidad}</p>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleRemove}>Eliminar</button>
    </div>
  );
};

export default CartItem;

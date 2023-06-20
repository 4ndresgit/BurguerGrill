/* aca van los productos en el carrito. Imagen, nombre, precio y cantidad. Tambien botones de aumentar/disminuir/eliminar del carrito*/

import React from 'react';

const CartItem = ({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
}) => {
  const { id, name, price, quantity } = item;

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
      <img src={item.image} alt={name} />
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <p>Cantidad: {quantity}</p>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleRemove}>Eliminar</button>
    </div>
  );
};

export default CartItem;

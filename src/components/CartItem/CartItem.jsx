import React from 'react';

const CartItem = ({ product, removeFromCart }) => {
  const { imagen, descripcion, precio } = product;

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="cart-item">
      <img src={imagen} alt={descripcion} />
      <div className="item-details">
        <p>{descripcion}</p>
        <p>${precio}</p>
      </div>
      <button className="remove-button" onClick={handleRemove}>
        X
      </button>
    </div>
  );
};

export default CartItem;



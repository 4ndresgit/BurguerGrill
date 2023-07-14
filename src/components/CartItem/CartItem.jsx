import React from 'react';
import './CartItem.scss'

const CartItem = ({ product, removeFromCart }) => {
  const { imagen, descripcion, precio, quantity } = product;

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="cart-item">
      <img src={imagen} alt={descripcion} />
      <div className="item-details">
        <p>{descripcion}</p>
        <p>${precio} x {quantity} unidades</p>
        <p>Total: ${precio*quantity}</p>
      </div>
      <button className="remove-button" onClick={handleRemove}>
        X
      </button>
    </div>
  );
};

export default CartItem;



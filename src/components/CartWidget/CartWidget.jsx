import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import { useCart } from '../../context/CartContext';

function CartWidget() {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} size='xl' />
      <Badge bg='light' text='dark'>{cartItemCount}</Badge>
    </div>
  );
}

export default CartWidget;

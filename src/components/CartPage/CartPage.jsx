
import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { CartContext } from '../../Context/CartContext/';

const CartPage = () => {
  const { cartItems } = useContext(CartContext); 

  return (
    <div>
      <h2>Tu carrito de compras</h2>
      <Cart cartItems={cartItems} />{' '}
    </div>
  );
};

export default CartPage;


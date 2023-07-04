import React, { useContext } from 'react';
import Cart from '../Cart/Cart';
import { CartContext } from '../../Context/CartContext';

const CartPage = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Tu carrito de compras</h2>
      <Cart cartItems={cart} />
    </div>
  );
};

export default CartPage;

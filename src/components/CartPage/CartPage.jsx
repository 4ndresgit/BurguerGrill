
import React, { useState } from 'react';
import Cart from '../Cart/Cart';


const CartPage = () => {
  const [cartItems, setCartItems] = useState([]); 

  return (
    <div>
      <h2>Tu carrito de compras</h2>
      <Cart cartItems={cartItems} />{' '}
    </div>
  );
};

export default CartPage;


import React, { useContext } from 'react';
import CartItem from "../CartItem/CartItem";
import { useCart } from '../../context/CartContext';

const CartPage = () => {
  const { cart, handleRemoveFromCart } = useCart();

  const totalPrice = cart.reduce((total, product) => total + product.precio, 0);

  return (
    <div className="cart-page">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              removeFromCart={handleRemoveFromCart}
            />
          ))}
          <div className="total-price">Total: ${totalPrice}</div>
        </>
      )}
    </div>
  );
};

export default CartPage;

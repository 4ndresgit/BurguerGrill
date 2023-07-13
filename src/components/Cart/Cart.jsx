

import React from 'react';
import { useCart } from './context/CartContext';
import CartItem from '../CartItem/CartItem';
import './Cart.scss';

const Cart = () => {
  const { cart, handleAddToCart, handleRemoveFromCart } = useCart();

  const increaseQuantity = (productId) => {
    handleAddToCart(productId, 1);
  };

  const decreaseQuantity = (productId) => {
    handleAddToCart(productId, -1);
  };

  const removeProduct = (productId) => {
    handleRemoveFromCart(productId);
  };

  const calculateSubtotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const taxRate = 0.1;
    const shippingCost = 5;
    return subtotal + subtotal * taxRate + shippingCost;
  };

  return (
    <div>
      <h2>Pedidos</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeProduct={removeProduct}
            />
          ))}
          <div>
            <p>Subtotal: ${calculateSubtotal()}</p>
            <p>Total: ${calculateTotal()}</p>
            <button>Pagar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

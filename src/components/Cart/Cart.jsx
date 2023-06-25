

import React, { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import productData from '../../product.json'
import './Cart.scss' 

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    productData.map((product) => ({
        ...product,
        quantity: 0,
    })));

  // Aumentar productos del carrito
  const increaseQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // restar productos del carrito
  const decreaseQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // eliminar del carrito
  const removeProduct = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  // calcular el subtotal del carrito
  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // calcular el total con impuestos, envío, etc.
  const calculateTotal = () => {
    // total incluyendo impuestos, envío, etc.
    
    const subtotal = calculateSubtotal();
    const taxRate = 0.1; // 21% de impuestos
    const shippingCost = 5;
    return subtotal + subtotal * taxRate + shippingCost;
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          {cartItems.map((item) => (
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

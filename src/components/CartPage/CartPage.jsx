import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import CartItem from "../CartItem/CartItem";
import { FaShoppingCart } from "react-icons/fa";
import "./CartPage.scss";

const CartPage = () => {
  const { cart, handleRemoveFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, product) => total + product.precio, 0) 

    const handleRemove = (productId) => {
      handleRemoveFromCart(productId);
    };
  
  return (
    <div className="cart-page">
      <div className="title" style={{ display: "flex", alignItems: "center" }}>
        <FaShoppingCart size={40} />
        <h1 style={{ textTransform: "uppercase", marginLeft: "50px" }}>
          Pedidos
        </h1>
      </div>
      {cart.length === 0 ? (
        <p>¡No tenés productos en el carrito!</p>
      ) : (
        <div className="cart-product">
          {cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              removeFromCart={handleRemove}
            />
          ))}
          <div className="total-price">Total: ${totalPrice}</div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

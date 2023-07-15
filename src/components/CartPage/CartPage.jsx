

import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import CartItem from "../CartItem/CartItem";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import "./CartPage.scss";

const CartPage = () => {
  const { cart, handleRemoveFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, product) => total + product.precio * product.quantity, 0) 

  const handleRemove = (productId) => {
    handleRemoveFromCart(productId);
  };
  
  const handlePurchase = async () => {
    const order = {
      products: cart, 
      date: serverTimestamp() 
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      const orderId = docRef.id; 

      alert(`Se envió tu pedido con el número: ${orderId}`);
    } catch (error) {
      console.error('Error al guardar la orden:', error);
    }
  };
    
  const [comment, setComment] = useState("");

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
        </div>
      )}
      <div className="comment-box">
        <textarea
          className="comment-input"
          placeholder="Añadir comentario ..."
          defaultValue={comment}
          onInput={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <div className="total-price">TOTAL: ${totalPrice}</div>
      <hr className="divider" />
      <div className="buttons-container">
        <Link to="/" className="continue-shopping-button">
          SEGUIR COMPRANDO
        </Link>
        <button className="purchase-button" onClick={handlePurchase}>
          CONFIRMAR PEDIDO
        </button>
      </div>
    </div>
  );
};

export default CartPage;

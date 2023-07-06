import React, { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { useCart } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "./CartPage.scss";

const CartPage = () => {
  const { cart, handleRemoveFromCart } = useCart();

  const totalPrice = cart.reduce((total, product) => total + product.precio, 0);

  return (
    <div className="cart-page">
      <div className="title" style={{ display: "flex", alignItems: "center" }}>
        <FaShoppingCart size={40} />
        <h1 style={{ textTransform: "uppercase", marginLeft: "50px" }}>
          Pedidos
        </h1>
      </div>
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

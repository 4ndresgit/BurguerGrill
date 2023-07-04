import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import productData from "../../product.json";
import "./ProductDetailPage.scss";
import { CartContext } from "../../Context/CartContext";
import {} from "react";

const ProductDetailPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleOptionChange = (option) => {
    const isSelected = selectedOptions.includes(option);
    if (isSelected) {
      setSelectedOptions(
        selectedOptions.filter((selectedOption) => selectedOption !== option)
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    console.log('Handle Add to Cart');
    
    if (product) {
      console.log('Product:', product);
      
      const existingItem = cart.find((item) => item.id === product.id);
      console.log('Existing Item:', existingItem);
      
      if (existingItem) {
        existingItem.quantity += quantity;
        console.log('Updated Cart:', cart);
        setCart([...cart]);
      } else {
        const newItem = { ...product, quantity };
        console.log('New Item:', newItem);
        setCart([...cart, newItem]);
      }
    }
  };
  
  const getProductById = (id) => {
    return productData.find((p) => p.id.toString() === id);
  };

  useEffect(() => {
    const product = getProductById(productId);
    if (product) {
      setProduct(product);
    }
  }, [productId]);

  if (!product) {
    return null;
  }

  const { nombre, descripcion, imagen, precio } = product;

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <button className="close-button" onClick={() => window.history.back()}>
          &#10005;
        </button>
        <img src={imagen} alt={nombre} className="product-image" />
        <div className="product-info">
          <h2 className="product-name">{nombre}</h2>
          <p className="product-description">{descripcion}</p>
          <div className="product-price">${precio}</div>
          <div className="quantity">
            <h3>Cantidad:</h3>
            <button
              className={`decrease-button${quantity === 1 ? " disabled" : ""}`}
              onClick={() => handleQuantityChange(-1)}
            >
              {" "}
              -
            </button>
            <span>{quantity}</span>
            <button
              className="increase-button"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>
          <div>
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Agregar al pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

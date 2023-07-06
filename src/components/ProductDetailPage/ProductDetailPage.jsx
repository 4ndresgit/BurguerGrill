import "./ProductDetailPage.scss";
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import productData from "../../product.json";
import { CartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ProductDetailPage = () => {
  const {  handleAddToCart } = useContext(CartContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);

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

  const onAdd = (cantidad) => {
    handleAddToCart(product, cantidad);
    setCartOpen(true); 
  };

  const handleCloseCart = () => {
    setCartOpen(false); 
    history.goBack(); 
  };

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
          <ItemCount
            quantity={quantity}
            setQuantity={setQuantity}
            handleAddToCart={onAdd}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

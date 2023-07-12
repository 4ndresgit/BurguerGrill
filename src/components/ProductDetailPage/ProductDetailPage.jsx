import "./ProductDetailPage.scss";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { db } from "../../Firebase/config";
import { doc, getDoc } from "firebase/firestore";



const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);

  

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "productos", productId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          console.log("Product does not exist");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
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

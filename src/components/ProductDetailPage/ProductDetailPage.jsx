import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import productData from '../../product.json';
import './ProductDetailPage.scss';

const ProductDetailPage = () => {
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
    // Lógica para agregar el producto al carrito
    console.log(`Producto: ${product.nombre}`);
    console.log(`Valor: ${product.precio * quantity}`);
    console.log(`Opciones: ${selectedOptions.join(', ')}`);
  };

  const getProductById = (id) => {
    // Simulación de la obtención del producto por ID desde el backend
    return productData.find((p) => p.id.toString() === id);
  };

  useEffect(() => {
    const product = getProductById(productId);
    if (product) {
      setProduct(product);
    }
  }, [productId]);

  if (!product) {
    return null; // Otra acción a tomar si el producto no está definido
  }

  const { nombre, descripcion, imagen, precio } = product;

  return (
    <div className='product-detail'>
      <button className='close-button' onClick={() => window.history.back()}>
        &#10005;
      </button>
      <img src={imagen} alt={nombre} className='product-image' />
      <div className='product-info'>
        <h2 className='product-name'>{nombre}</h2>
        <p className='product-description'>{descripcion}</p>
        <div className='options'>
          <label>
            <input
              type='checkbox'
              checked={selectedOptions.includes('sin aderezos')}
              onChange={() => handleOptionChange('sin aderezos')}
            />
            Sin aderezos
          </label>
          <label>
            <input
              type='checkbox'
              checked={selectedOptions.includes('sin cebolla')}
              onChange={() => handleOptionChange('sin cebolla')}
            />
            Sin cebolla
          </label>
          <label>
            <input
              type='checkbox'
              checked={selectedOptions.includes('sin cheddar')}
              onChange={() => handleOptionChange('sin cheddar')}
            />
            Sin cheddar
          </label>
          <label>
            <input
              type='checkbox'
              checked={selectedOptions.includes('sin bacon')}
              onChange={() => handleOptionChange('sin bacon')}
            />
            Sin bacon
          </label>
        </div>
        <div className='quantity'>
          <h3>Cantidad:</h3>
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
        <Link to='/cart' className='add-to-cart-button' onClick={handleAddToCart}>
          Agregar a mi pedido (${precio * quantity})
        </Link>
      </div>
    </div>
  );
};

export default ProductDetailPage;

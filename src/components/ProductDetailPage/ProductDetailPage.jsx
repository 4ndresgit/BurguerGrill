import React, { useState } from 'react';
import './ProductDetailPage.scss';

const ProductDetailPage = ({ product, handleAddToCart, handleClose }) => {
  if (!product) {
    return null; // Otra acción a tomar si el producto no está definido
  }
  const { nombre, descripcion, imagen, precio } = product;
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleOptionChange = (option) => {
    const optionIndex = selectedOptions.indexOf(option);

    if (optionIndex !== -1) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleQuantityChange = (value) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const addToCart = () => {
    const modifiedProduct = {
      ...product,
      quantity,
      selectedOptions,
    };

    handleAddToCart(modifiedProduct);
  };

  return (
    <div className='product-detail'>
      <button className='close-button' onClick={handleClose}>
        <span>&times;</span>
      </button>
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <div className='options'>
        <h3>Quitar:</h3>
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
            checked={selectedOptions.includes('sin bacon')}
            onChange={() => handleOptionChange('sin bacon')}
          />
          Sin bacon
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
            checked={selectedOptions.includes('sin cebolla')}
            onChange={() => handleOptionChange('sin cebolla')}
          />
          Sin cebolla
        </label>
      </div>
      <div className='quantity'>
        <h3>Cantidad:</h3>
        <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
      </div>
      <button className='add-to-cart-button' onClick={addToCart}>
        Agregar a mi pedido
      </button>
      <p>Precio: {precio}</p>
    </div>
  );
};

export default ProductDetailPage;

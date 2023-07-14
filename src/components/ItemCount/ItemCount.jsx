
import { useNavigate } from "react-router-dom";




const ItemCount = ({ quantity, setQuantity, handleAddToCart }) => {
const navigate = useNavigate();

    const handleQuantityChange = (amount) => {
      const newQuantity = quantity + amount;
      if (newQuantity >= 1) {
        setQuantity(newQuantity);
      }
    };
  
    return (
      <div className="quantity">
        <h3>Cantidad:</h3>
        <button
          className={`decrease-button${quantity === 1 ? " disabled" : ""}`}
          onClick={() => handleQuantityChange(-1)}
        >
          -
        </button>
        <span>{quantity}</span>
        <button className="increase-button" onClick={() => handleQuantityChange(1)}>
          +
        </button>
        <button className="add-to-cart-button" onClick={() => {
  handleAddToCart(quantity);
  navigate('/cart');
}}>
          AGREGAR A MI PEDIDO
        </button>
      </div>
    );
  };
  
  export default ItemCount;
  
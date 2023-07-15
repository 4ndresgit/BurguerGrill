

import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import CartContext from '../../context/CartContext';

const Checkout = () => {
  const { cartItem, showId, setShowModal, totalPrice } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [order, setOrder] = useState({
    buyer: {
      name: '',
      phone: '',
      email: '',
    },
    items: cartItem.map((CartItem) => ({
      id: CartItem.id,
      title: CartItem.title,
      price: CartItem.price,
    })),
    total: totalPrice,
  });
  const [successOrder, setSuccessOrder] = useState('');

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      return resolve(cartItem);
    });
  };

  useEffect(() => {
    console.log(cartItem);
    const timer = setTimeout(() => {
      setLoading(true);
      setProducts([]);
      getProducts()
        .then((products) => {
          setProducts(products);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 0);
    return () => clearTimeout(timer);
  }, [cartItem]);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(formData);
    let prevOrder = {
      ...order,
      buyer: formData,
    };
    setOrder({
      ...order,
      buyer: formData,
    });
    pushOrder(prevOrder);
  };

  const pushOrder = async (prevOrder) => {
    try {
        console.log(cartItem);
      const orderRef = await addDoc(collection(db, 'orders'), prevOrder);
      setSuccessOrder(orderRef.id);
      setLoading(false);
    } catch (error) {
      console.error('Error al guardar la orden:', error);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      {loading ? (
        <div className="circularProgress">
          <CircularProgress color="inherit" />
        </div>
      ) : successOrder ? (
        <div>
          <h3 className="w-25 align-left marginAuto mt-10">
            Tu orden de compra fue generada correctamente, nos pondremos en contacto con vos a la brevedad para coordinar el envío y las formas de pago
          </h3>
          <p className="w-25  align-left marginAuto mt-10">
            Su número de orden es: {successOrder}
          </p>
          <Link to={'/'}>
            <p className="button w-25 d-inline-block">Seguir comprando</p>
          </Link>
        </div>
      ) : (
        <>
          <div className="checkoutContainer">
            <div className="checkoutForm">
              <h4 className="align-left">
                Completá el formulario para confirmar la compra
              </h4>
              <form onSubmit={handleSubmit} autoComplete="off">
                <h6 className="align-left m-0">Datos personales</h6>
                <input
                  className="checkOutInput"
                  type="text"
                  name="name"
                  placeholder="Nombre y apellido"
                  onChange={handleChange}
                  value={formData.name}
                />
                <input
                  className="checkOutInput"
                  type="number"
                  name="phone"
                  placeholder="Teléfono"
                  onChange={handleChange}
                  value={formData.phone}
                />
                <input
                  className="checkOutInput"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  onChange={handleChange}
                  value={formData.email}
                />
                <Button type="submit" className="w-100 p-0">
                  <p className="button d-inline-block w-100">Enviar</p>
                </Button>
                <Link to="/cart">
                  <p className="fs-08em">Volver atrás</p>
                </Link>
              </form>
            </div>
            <div className="checkoutForm">
              <h5>Tu carrito</h5>
              {products.map((product) => {
                const { id, img, alt, title, price, cant } = product;
                const total = price * cant;
                if (!showId.includes(id)) {
                  return <div key={id}></div>;
                } else {
                  return (
                    <div
                      className="cartItemContainerModal display-table"
                      key={id}
                    >
                      <div className="col-4 table-cell imgContainer">
                        <img src={img} alt={alt} className="w-80" />
                      </div>
                      <div className="col-4 table-cell">
                        <p className="title">{title}</p>
                        <p className="price">${price}</p>
                        <p className="price">Cantidad: {cant}</p>
                        <p className="price">
                          <b>Total: ${total}</b>
                        </p>
                      </div>
                    </div>
                  );
                }
              })}
              <p>Total Final: ${totalPrice}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;

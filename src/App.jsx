import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import AboutPage from './components/AboutPage/AboutPage.jsx';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignInForm from './components/SignInForm/SignInForm';
import ProductListContainer from './components/ProductListContainer/ProductListContainer';
import Cart from './components/Cart/Cart';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    if (product) {
      setShowCart(true);
    }
  };

  return (
    <Router>
      <div className='App'>
        <NavBar userLoggedIn={userLoggedIn} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/signin' element={<SignInForm />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        {showCart && <Cart />}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignInForm from './components/SignInForm/SignInForm';
import ProductListContainer from './components/ProductListContainer/ProductListContainer';
import ProductDetailPage from './components/ProductDetailPage/ProductDetailPage';
import CartPage from './components/CartPage/CartPage';
import { CartProvider } from './Context/CartContext';

function App() {

  return (
    
    <Router>
      <div className='App'>
        <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/signin' element={<SignInForm />} />
          <Route path='/category/:categoryId' element={<ProductListContainer />} />

          <Route path='/products/:productId' element={<ProductDetailPage />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
        <Footer />
        </CartProvider>
        
      </div>
    </Router>
  );
}

export default App;

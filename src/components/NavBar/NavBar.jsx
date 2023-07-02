import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import logo from '../../assets/images/burguer.svg';
import CartWidget from '../CartWidget/CartWidget';
import { useCart } from '../../Context/CartContext';

const NavBar = ({ userLoggedIn }) => {
  const { Cart } = useCart()
  return (
    <header className='header'>
      <div className='header__container'>
        <img src={logo} alt='logo' />
        <nav className='header__nav'>
          <ul>
            <li>
              <Link to='/'>Take away</Link>
            </li>
            <li>
              <Link to='/about'>Nosotros</Link>
            </li>
            <li>
              {userLoggedIn ? (
                <Link to='/cart'>
                  <CartWidget />
                </Link>
              ) : (
                <Link to='/signin' id='login'>Login</Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

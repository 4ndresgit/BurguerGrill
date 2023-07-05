import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import logo from "../../assets/images/burguer.svg";
import CartWidget from "../CartWidget/CartWidget";
import { useCart } from "../../Context/CartContext";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = ({ userLoggedIn }) => {
  return (
    <Navbar className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="logo" />
        <div className="navbar-links">
        <Link to="/" className="navbar-brand">
          Take away
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <Link to="/category/burgers" className="dropdown-item">
                Burgers
              </Link>
              <Link to="/category/starter" className="dropdown-item">
                Starters
              </Link>
              <Link to="/category/drinks" className="dropdown-item">
                Drinks
              </Link>
              <Link to="/category/sauces" className="dropdown-item">
                Sauces
              </Link>
            </NavDropdown>
          <Nav className="mr-auto">
            <Link to="/about" className="nav-link">
              Nosotros
            </Link>
            {userLoggedIn ? (
              <Link to="/cart" className="nav-link">
                Carrito
              </Link>
            ) : (
              <Link to="/signin" className="nav-link">
                Login
              </Link>
            )}
            
          </Nav>
        </Navbar.Collapse>
        </div>
        
      </div>
    </Navbar>
  );
};

export default NavBar;

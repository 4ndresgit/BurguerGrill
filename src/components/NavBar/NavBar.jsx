import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../assets/images/burguer.svg";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.scss";

const NavBar = ({ userLoggedIn }) => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const isActiveCategory = (category) => {
    if (category === selectedCategory) {
      return "active";
    }
    return "";
  };

  return (
    <Navbar className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="logo" />
        <div className="navbar-links">
          <Link to="/" className="navbar-brand nav-link">
            Take away
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <Link
                to="/"
                className={`dropdown-item ${isActiveCategory(null)}`}
                onClick={() => handleCategorySelect(null)}
              >
                Todos
              </Link>
              <Link
                to="/category/burgers"
                className={`dropdown-item ${isActiveCategory("burgers")}`}
                onClick={() => handleCategorySelect("burgers")}
              >
                Burgers
              </Link>
              <Link
                to="/category/starter"
                className={`dropdown-item ${isActiveCategory("starter")}`}
                onClick={() => handleCategorySelect("starter")}
              >
                Starters
              </Link>
              <Link
                to="/category/drinks"
                className={`dropdown-item ${isActiveCategory("drinks")}`}
                onClick={() => handleCategorySelect("drinks")}
              >
                Drinks
              </Link>
              <Link
                to="/category/sauces"
                className={`dropdown-item ${isActiveCategory("sauces")}`}
                onClick={() => handleCategorySelect("sauces")}
              >
                Sauces
              </Link>
            </NavDropdown>
            <Nav className="mr-auto">
              <Link to="/about" className="nav-link">
                Nosotros
              </Link>

              <Link to="/signin" className="nav-link login">
                Login
              </Link>
              <Link to="/cart" className="nav-link cart">
                <CartWidget />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;

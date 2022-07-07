import React from "react";
import CartIcon from "../Cart/CartIcon";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">
          <img src= "ecommerce/src/utils/images/Logo.jpeg" alt="" />
        </Link>
        <div className="icon navbar-nav ">
          <li>
            <Link className="nav-link" to="/cart">
              <CartIcon />
            </Link>
          </li>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Inicio <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Productos
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/cart">
                <CartIcon />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
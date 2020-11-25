import React,{useContext} from "react";
import {NavLink} from 'react-router-dom';
import {cartContext}from './../../cart';
export const Nav = () => {

    const {cart}=useContext(cartContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <NavLink className="navbar-brand" to="/">
          ShopMe
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link cart-link" to="/Cart">
                Cart
                <span className="badge badge-pill badge-warning cart-badge">{cart.count}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

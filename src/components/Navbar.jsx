import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";



const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light bg-white py-3 shadow-sm">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            LA CALLECTION
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Producto
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  Acerca de
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contacto
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
            <Login />
              {/* <NavLink className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i><Login />
              </NavLink> */}
              <Signup />
              {/* <NavLink to="/register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i>Registrar
              </NavLink> */}
              <a href="https://wa.me/51987095779" className="btn btn-outline-dark ms-2" role="button" target="_blank" rel="noreferrer">
                <i className="fa fa-shopping-cart me-1"></i> Cart (
                {state.length})
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
<div></div>;

import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";
import Logo from "./logo.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img src={Logo} className="logo" alt="Logo" />
      </Link>
      <h1 className="tituloHeader">Resultados en el día</h1>
      <nav>
        <div className="menu">
          <ul>
            <Link to="/">
              <li className="nav-link ">Inicio</li>
            </Link>
            <Link to="/information">
              <li className="nav-link ">Información</li>
            </Link>
            <Link to="/prices">
              <li className="nav-link">Precios</li>
            </Link>
            <Link to="/contact">
              <li className="nav-link">Contacto</li>
            </Link>
            <div className="cartWidgetNav">
              <CartWidget />
            </div>
          </ul>
        </div>
        <div className="category">
          <p className="titleCategory">Categorías:</p>
          <Link to="/category/CABA">
            <li className="nav-link ">CABA</li>
          </Link>
          <Link to="/category/GBA">
            <li className="nav-link ">GBA</li>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

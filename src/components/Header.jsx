import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="teal">
      <div className="nav-wrapper container">
        <Link to="/">
          <div className="brand-logo">
            <i className="material-icons">gesture</i>Redux
          </div>
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <Link to="/productos/nuevo">
            <div>Agregar Producto</div>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

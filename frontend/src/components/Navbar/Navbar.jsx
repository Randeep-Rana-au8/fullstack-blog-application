import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <Link to="/">
          <h1>EkVichar</h1>
        </Link>
      </div>
      <div className="navbar-items">
        <Link to="/homepage">
          <p className="navbar-item">Home</p>
        </Link>
        <Link to="/category">
          <p className="navbar-item">Category</p>
        </Link>
        <Link to="/profile">
          <p className="navbar-item">Profile</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

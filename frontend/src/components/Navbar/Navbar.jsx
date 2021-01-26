import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <h1>EkVichar</h1>
      </div>
      <div className="navbar-items">
        <p className="navbar-item">Home</p>
        <p className="navbar-item">Category</p>
        <p className="navbar-item">Profile</p>
      </div>
    </div>
  );
};

export default Navbar;

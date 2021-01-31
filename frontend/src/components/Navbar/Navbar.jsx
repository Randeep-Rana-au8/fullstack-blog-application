import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <Link className="Link" to="/">
          <img width="100px" src={logo} />
        </Link>
      </div>
      <div className="navbar-items">
        <Link className="Link" to="/homepage">
          <p className="navbar-item">Home</p>
        </Link>
        <Link className="Link" to="/categories">
          <p className="navbar-item">Category</p>
        </Link>
        <Link className="Link" to="/addpost">
          <p className="navbar-item">Add Post</p>
        </Link>
        <Link className="Link" to="/profile">
          <p className="navbar-item">Profile</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

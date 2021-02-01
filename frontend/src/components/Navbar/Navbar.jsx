import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
import logo from "./brandnewlogo.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <Link className="Link" to="/">
          <img width="200px" src={logo} />
        </Link>
      </div>
      <div className="navbar-items">
        <Link className="Link" to="/homepage">
          <p className="navbar-item">Home</p>
        </Link>
        <HashLink className="Link" to="#category">
          <p className="navbar-item">Category</p>
        </HashLink>
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

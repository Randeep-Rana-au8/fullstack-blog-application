import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { connect } from "react-redux";
import { logOutUser } from '../../redux/actions/userActions'
import "./Navbar.css";
import logo from "./brandnewlogo.jpg";

const Navbar = ({ state }) => {
  const  user  = state.usersReducer.user
  let userData;
  if (user != null) {
    userData = JSON.parse(window.localStorage.getItem("user"));
    console.log(userData)
  } else {
    userData = null;
  }

  const handleLogoutSuccess = () => {
    window.localStorage.removeItem("user")
    logOutUser();
    alert("Logged out successfully");
  };

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
        {!user ?  (
        <Link className="Link" to="/signin">
          <p className="navbar-item">Login</p>
        </Link>
        ) : (
          <Link className="Link" onClick={handleLogoutSuccess} >
          <p className="navbar-item">Logout</p>
        </Link>
        )}
        
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  }
}

export default connect(mapStateToProps)(Navbar);

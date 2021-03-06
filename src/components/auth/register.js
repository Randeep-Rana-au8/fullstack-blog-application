import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../redux/actions/userActions";
import { Link, Redirect } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "./register.css";
import Svg from "./registerSvg.svg";

const Ragister = ({ state, setUser }) => {
  const { user } = state.usersReducer;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFirstNameChange = (event) => setFirstName(event.target.value);
  const onLastNameChange = (event) => setLastName(event.target.value);
  const onUserNameChange = (event) => setUserName(event.target.value);
  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    axios
      .post("https://myvicharbackend.herokuapp.com/RegisterUser", {
        firstName: firstName,
        lastName: lastName,
        username: userName,
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        localStorage.setItem("jwt",response.data.token)
        setUser(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (user) return <Redirect to="/homePage" />;

  return (
    <div className="mainDiv">
      <div className="imgDiv">
        <img className="loginSvg" src={Svg} alt="login svg" />
      </div>
      <Form className="loginForm" onSubmit={onSubmit}>
        <div className="firstLastName">
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter First Name" onChange={onFirstNameChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter Last Name" onChange={onLastNameChange} />
          </Form.Group>
        </div>
        <Form.Group>
          <Form.Label>User Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter Username" onChange={onUserNameChange} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter Email" onChange={onEmailChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Password" onChange={onPasswordChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          SignUp
        </Button>
        <div>
          <br />
          <p>
            {" "}
            <span>Aready a user? </span>
            <span>
              <Link to="/signin">Sign In</Link>
            </span>
          </p>
        </div>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    state: state,
  };
};

export default connect(mapStateToProps, { setUser })(Ragister);

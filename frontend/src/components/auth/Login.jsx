import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../redux/actions/userActions";
import { Redirect } from "react-router-dom";
import "./login.css";
import Svg from "./loginSvg.svg";
import { Button, Form, FormControl } from "react-bootstrap";

const Login = ({ state, setUser }) => {
  const { user } = state.usersReducer;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    axios
      .post("https://myvicharbackend.herokuapp.com/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        localStorage.setItem("jwt",response.data.token)
        setUser(response, ...email, ...password);
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
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={onEmailChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={onPasswordChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <div>
          <br />
          <p>
            {" "}
            <span>New User? </span>
            <span>
              <Link to="/signup">Signup</Link>
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

export default connect(mapStateToProps, { setUser })(Login);

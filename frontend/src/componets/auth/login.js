import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../redux/actions/userActions";
import { Redirect } from "react-router-dom";
import Navbar from "../navbar/navbar";
import "./login.css";
import Svg from "./loginSvg.svg";
import { Button, Form, FormControl } from "react-bootstrap";

const Login = ({ state, setUser }) => {

    const { user } = state.usersReducer;

    const history = useHistory('')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailChange = (event) => setEmail(event.target.value);
    const onPasswordChange = (event) => setPassword(event.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);

    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        alert("invalid email")
        return
    }
    axios
    .post("http://localhost:5000/signin", {
        email: email,
        password: password,
    })
    .then(function (response) {
        console.log(response.data.token);
        setUser(response, ...email, ...password);
        history.push('/homepage')
        localStorage.setItem("jwt",response.data.token)
    })
    .catch(function (error) {
        console.log(error);
    });
  };

//   if (user) return <Redirect to="/homePage" />;
  return (

    <div className="mainDiv">
        <Navbar/>
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

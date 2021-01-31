import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(email, password);

    axios.post('https://myvicharbackend.herokuapp.com/login', {
      email: email,
      password: password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" required placeholder="email" onChange={onEmailChange} />
      <input type="password" required placeholder="password" onChange={onPasswordChange}/>
      <button type="submit">login</button>
      New User?
      <Link to="/signup">signup</Link>
    </form>
  );
};

export default Login;

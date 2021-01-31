import React, { useState } from "react";
import axios from "axios";

const Ragister = () => {
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
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="firstName" placeholder="firstName" onChange={onFirstNameChange} />
      <input type="lastName" placeholder="lastName" onChange={onLastNameChange} />
      <input type="userName" placeholder="userName" onChange={onUserNameChange} />
      <input type="text" required placeholder="email" onChange={onEmailChange} />
      <input type="password" required placeholder="password" onChange={onPasswordChange} />
      <button type="submit">signup</button>
    </form>
  );
};

export default Ragister;

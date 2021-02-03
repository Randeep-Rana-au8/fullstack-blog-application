import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../redux/actions/userActions";
import { Redirect } from "react-router-dom";
import './login.css'



const Login = ({ state, setUser }) => {

  const { user } = state.usersReducer

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
      setUser(response, ...email, ...password);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  if (user) return <Redirect to='/homePage' />;
  return (
    <div className='mainDiv'>
      <div className='imgDiv'>Here will be image</div>
      <form onSubmit={onSubmit} className='loginForm'>
        <input type="text" required placeholder="email" onChange={onEmailChange} />
        <input type="password" required placeholder="password" onChange={onPasswordChange}/>
        <button type="submit">login</button>
        <div className='singup' >New User?
        <Link to="/signup">signup</Link>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    state: state,
  }
}

export default connect(mapStateToProps, { setUser })(Login);

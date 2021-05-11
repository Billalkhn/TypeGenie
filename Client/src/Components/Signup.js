import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const axios = require("axios");



const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPasseord] = useState("");
  const [fullName, setFullName] = useState("");


  const history = useHistory();
  const handleClick = () => {
      history.push('editor')
  }

  const OnRegister = (email, password, fullName) => {
    axios
      .post("http://localhost:28017/api/auth/register", {
        fullName: fullName,
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        handleClick();
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  
  return (
    
    <div style={{ width: "450px", padding: "40px 55px 45px 55px" }}>
      <h3>Register</h3>

      <div className="form-group">
        <label>Full name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Full name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPasseord(event.target.value)}
        />
      </div>

      <button type="submit"
        className="btn btn-primary btn-block"
        onClick={() => OnRegister(email, password, fullName)}
      >
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="sign-in">Login</a>
      </p>
      </div>
  );
};
export default SignUp;

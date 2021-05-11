import React, {  useState } from "react";
import { useHistory } from 'react-router-dom';

const axios = require('axios')


 const  SignIn = () =>  {
  const [email, setEmail] =  useState('')
  const [password, setPasseord] =  useState('')

 
  const history = useHistory();
  const handleClick = () => {
      history.push('editor')
  }
  const onLogin = async (email, password) => {
    await axios
      .post("http://localhost:28017/api/auth/login", {
        email: email, 
        password: password,
      })
      .then(function (response) {
        console.log(response);
        handleClick()
      })
      .catch(function (err) {
        console.log(err)
      })
  };
    return (
      <div style={{ width: "450px", padding: "40px 55px 45px 55px" }}>
      <h3>Login</h3>

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
            onChange={(e) => setPasseord(e.target.value)}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block" onClick={() => onLogin(email,password)}>
          Submit
        </button>

        <p className="forgot-password  text-right   ">
          Needs to register <a href="sign-up">Register</a>
        </p>
      </div>
    );  
  
}
export default SignIn
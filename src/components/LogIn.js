import React from 'react';
import logo from '../assets/images/Logo Small.png';
import './log-in.css';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div className="container">
      <Link to="/">
      <img className="logo-log-in" src={logo} alt="logo" />
      </Link>
      <form onSubmit={"#"} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={"#"} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={"#"} />
        </div>
        <div className="input-field">
          <button className="btn z-depth-0">Log In</button>
          <div className="center">
            {/* {authError ? <p>{authError}</p> : null} */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogIn

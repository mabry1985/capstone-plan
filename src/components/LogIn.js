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
        <form onSubmit={"#"} className="log-in-form">
          <div className="input-div">
              <div className="email-input">
                <label htmlFor="email" className="a11y">Email</label>
                <input type="email" id="email" onChange={"#"} placeholder="Email" />
              </div>
              <div className="password-input">
                <label htmlFor="password" className="a11y">Password</label>
                <input type="password" id="password" onChange={"#"} placeholder="Password" />
              </div>
          </div>
          <div className="log-in-but">
            <button className="log-in-button">Log In</button>
          </div>
        </form>
    </div>
  );
}

export default LogIn

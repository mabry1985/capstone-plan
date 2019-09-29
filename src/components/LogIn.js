import React from 'react';
import logo from '../assets/images/logo-small.png';
import './log-in.css';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div>
      <Link to="/">
      <img className="logo-log-in" src={logo} alt="logo" />
      </Link>
        
        <form onSubmit={"#"} className="log-in-form">
          <div className="input-div-log-in">
              
              <div className="email-input-log-in">
                <label htmlFor="email" className="a11y">Email</label>
                <input type="email" id="email" onChange={"#"} placeholder="Email" autoFocus/>
              </div>
             
              <div className="password-input-log-in">
                <label htmlFor="password" className="a11y">Password</label>
                <input type="password" id="password" onChange={"#"} placeholder="Password" />
              </div>
          </div>

          <Link to="/main-menu">
            <button className="log-in-button">Log In</button>
          </Link>
        </form>
    </div>
  );
}

export default LogIn

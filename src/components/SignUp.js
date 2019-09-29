import React from 'react';
import logo from '../assets/images/logo-small.png';
import './sign-up.css';
import { Link } from 'react-router-dom'

const SignUp = () => {

  return (
    <div>
      <Link to="/">
        <img className="logo-sign-up" src={logo} alt="logo" />
      </Link>

        <form onSubmit={"this.handleSubmit"} className="sign-up-form">
      
          <div className="input-div-sign-up">
            <div className="email-input-sign-up">
              <label htmlFor="email" className="a11y">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Email"
                autoFocus />
            </div>
      
            <div className="password-input-sign-up">
              <label htmlFor="password" className="a11y">Password</label>
              <input type="password" id="password" placeholder="Password" />
            </div>
      
            <div className="first-name-input-sign-up">
              <label htmlFor="firstName" className="a11y">First Name</label>
              <input type="text" id="firstName" placeholder="First Name" />
            </div>
      
            <div className="last-name-input-sign-up">
              <label htmlFor="lastName" className="a11y">Last Name</label>
              <input type="text" id="lastName" placeholder="Last Name" />
            </div>
          </div>
      
          <div id="tos-checkbox">
            <input id="checkbox" type="checkbox"/>
            <p className="tos">I have read the <span className="tos-link">terms and conditions</span> and agree to give my privacy away</p> 
          </div>
      
          <br />
      
          <Link to="/main-menu">
            <button className="sign-up-button">Sign Up</button>
          </Link>
        </form>
    </div>
  );
}

export default SignUp

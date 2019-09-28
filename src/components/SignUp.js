import React from 'react';
import logo from '../assets/images/Logo Small.png';
import './sign-up.css';
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
      <Link to="/">
        <img className="logo-sign-up" src={logo} alt="logo" />
      </Link>
        <form onSubmit={"this.handleSubmit"} className="sign-up-form">
          <div className="input-field">
            <label htmlFor="email" className="a11y">Email</label>
            <input type="email" id="email" onChange={"this.handleChange"} placeholder="Email"/>
          </div>
          <div className="input-field">
            <label htmlFor="password" className="a11y">Password</label>
            <input type="password" id="password" onChange={"this.handleChange"} placeholder="Password" />
          </div>
          <div className="input-field">
            <label htmlFor="firstName" className="a11y">First Name</label>
            <input type="text" id="firstName" onChange={"this.handleChange"} placeholder="First Name" />
          </div>
          <div className="input-field">
            <label htmlFor="lastName" className="a11y">Last Name</label>
            <input type="text" id="lastName" onChange={"this.handleChange"} placeholder="Last Name" />
          </div>
          <div className="sign-up-button-div">
            <button className="sign-up-button">Sign Up</button>
          </div>
          <div className="center">
              {/* {authError ? <p>{authError}</p> : null} */}
          </div>
        </form>
    </div>
  );
}

export default SignUp

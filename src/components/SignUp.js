import React from 'react';
import logo from '../assets/images/Logo Small.png';
import './sign-up.css';

const SignUp = () => {
    return (
        <div className="sign-up">
        <img className="logo-sign-up" src={logo} alt="logo" />
                <h5 className="sign-up-h5">Sign Up</h5>
            <form onSubmit={"this.handleSubmit"} className="white">
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={"this.handleChange"} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={"this.handleChange"} />
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={"this.handleChange"} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={"this.handleChange"} />
                </div>R
                <div className="sign-up-button-div">
                    <button className="sign-up-button">Sign Up</button>
                </div>
                <div className="center">
                    {/* {authError ? <p>{authError}</p> : null} */}
                </div>
            </form>
            <div className="logo">
            </div>
        </div>
    );
}

export default SignUp

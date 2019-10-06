import React, { Component } from 'react';
import logo from '../assets/images/logo-small.png';
import './sign-up.css';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import { signUp } from './../actions/authActions';

const FadeIn = styled.div`animation: 2500ms ease-in ${keyframes`${fadeIn}`}`

class SignUp extends Component {
  
  state = { 
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }

  handleChange = (e) => {
    console.log(e);
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("im submitting")
    this.props.signUp(this.state)
  }

  render() {
    return (
      <FadeIn>
        <div>
            <img className="logo-sign-up" onClick={this.props.onClickSignUp} src={logo} alt="logo" />

            <form onSubmit={this.handleSubmit} className="sign-up-form">
          
              <div className="input-div-sign-up">
                <div className="email-input-sign-up">
                  <label htmlFor="email" className="a11y">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Email"
                    onChange={this.handleChange}
                    autoFocus />
                </div>
          
                <div className="password-input-sign-up">
                  <label htmlFor="password" className="a11y">Password</label>
                <input type="password" id="password" placeholder="Password" onChange={this.handleChange}/>
                </div>
          
                <div className="first-name-input-sign-up">
                  <label htmlFor="firstName" className="a11y">First Name</label>
                <input type="text" id="firstName" placeholder="First Name" onChange={this.handleChange} />
                </div>
          
                <div className="last-name-input-sign-up">
                  <label htmlFor="lastName" className="a11y">Last Name</label>
                <input type="text" id="lastName" placeholder="Last Name" onChange={this.handleChange}/>
                </div>
              </div>
          
              <div id="tos-checkbox">
                <input id="checkbox" type="checkbox"/>
                <p className="tos">I have read the <span className="tos-link">terms and conditions</span> and agree to give my privacy away</p> 
              </div>
          
              <br />
                <button className="sign-up-button">Sign Up</button>
            </form>
        </div>
      </FadeIn>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  }
}


export default connect(null, mapDispatchToProps)(SignUp)

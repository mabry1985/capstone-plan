import React, { Component } from 'react';
import logo from '../assets/images/logo-small.png';
import './log-in.css';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { logIn } from './../actions/authActions';
import { connect } from 'react-redux';

const FadeIn = styled.div`animation: 2500ms ease-in ${keyframes`${fadeIn}`}`


class LogIn extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      email: '',
      password: '',
    }
  }


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.logIn(this.state)
  }

  render() {
    const { authError } = this.props;
    return (
        <FadeIn>
          <div className="log-in-div">
              <img className="logo-log-in" onClick={this.props.onClickLogIn} src={logo} alt="logo" />
                
                <form onSubmit={this.handleSubmit} className="log-in-form">
                  <div className="input-div-log-in">
                      <div className="email-input-log-in">
                        <label htmlFor="email" className="a11y">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} placeholder="Email" autoFocus/>
                      </div>
                    
                      <div className="password-input-log-in">
                        <label htmlFor="password" className="a11y">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} placeholder="Password" />
                      </div>
                  </div>
              <button className="log-in-button">Log In</button>
              <div className="log-in-error">
                { authError ? <p className="error">{authError}</p> : null}
              </div>
                </form>
            </div>
        </FadeIn>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (creds) => dispatch(logIn(creds))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LogIn)

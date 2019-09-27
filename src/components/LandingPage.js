import React from 'react';
import Model from './Model';
import logo from '../assets/images/Logo Small.png';
import './LandingPage.css'

class LandingPage extends React.Component {
    render() {
    return (
        <div className='landing-page'>
            <div className="landing-page-btns">
                <button className="btn-large login">Login</button> 
                <br />
                <button className="btn-large new-account">New Account</button>
            </div>
            <div className="logo-landing-page">
                <img src={logo} alt="logo"/>
                {/* <img src={logo} alt="logo shadow" className="logo-landing-page-shadow"/> */}
            </div>
            <Model/>
        </div>
    )}
}

export default LandingPage

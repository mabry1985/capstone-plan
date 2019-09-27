import React from 'react';
import Model from './Model';
import logo from '../assets/images/Logo Small.png';
import bg from '../assets/images/landing-page-bg.png';
import tempRoom from '../assets/images/landing-page-bg-room.png'
import './LandingPage.css'

class LandingPage extends React.Component {
    render() {
    return (
        <main>
            <img 
              className= "landing-bg-layer" 
              src={bg} 
              alt="background layer" />
            <div className='landing-page'>
                <div className="bg">
                </div>
                <div className="landing-page-btns">
                    <button className="btn-large log-in">Log In</button> 
                    <br />
                    <button className="btn-large sign-up">Sign Up</button>
                </div>
                <div className="logo-landing-page">
                    <img src={logo} alt="logo"/>
                    {/* <img src={logo} alt="logo shadow" className="logo-landing-page-shadow"/> */}
                </div>
                <img className="temp-room" src={tempRoom} alt=""/>
                <Model/>
            </div>
        </main>
    )}
}

export default LandingPage

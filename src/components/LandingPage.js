import React from 'react';
import Model from './Model';
import logo from '../assets/images/logo-small.png';
import bg from '../assets/images/landing-page-bg.png';
import tempRoom from '../assets/images/landing-page-bg-room.png'
import './landing-page.css'
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
    render() {
    return (
        <main>
            <img 
              className= "landing-bg-layer" 
              src={bg} 
              alt="background layer" />
            <div className='landing-page'>
                <div className="landing-page-btns">
                    <Link to="/log-in">
                      <button className="log-in">Log In</button> 
                    </Link>
                    <br />
                    <Link to="/sign-up">
                      <button className="sign-up">Sign Up</button>
                    </Link>
                </div>
                 <img className="logo-landing-page" src={logo} alt="logo"/>
                  {/* <img src={logo} alt="logo shadow" /> */}
                <img className="temp-room" src={tempRoom} alt=""/>
                <Model/>
            </div>
        </main>
    )}
}

export default LandingPage

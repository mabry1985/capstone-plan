import React from 'react';
import Model from './Model';
import logo from '../assets/images/Logo Small.png';
import bg from '../assets/images/landing-page-bg.png';
import tempRoom from '../assets/images/landing-page-bg-room.png'
import './landing-page.css'
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';

class LandingPage extends React.Component {
    render() {
    return (
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1}}>
            {props => (
                <div style={props}>
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
                </div>
            )}
        </Spring>
    )}
}

export default LandingPage

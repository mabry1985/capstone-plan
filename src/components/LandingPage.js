import React from 'react';
import Model from './Model';

class LandingPage extends React.Component {
    render() {
    return (
        <div className='landing-page'>
            <button>Login</button>
            <button>New Account</button>
            <div className="logo">
                <img src="#" alt="logo"/>
            </div>
            <Model/>
        </div>
    )}
}

export default LandingPage

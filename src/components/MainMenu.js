import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile'

const mainMenu = () => {
    return (
        <div className= "container">
            <Profile/>
            <div className="menu-button">
                <Link to='/menu'>Menu</Link>
            </div>
            <div className="menu-button">
                <Link to='/sell'>Sell</Link>
            </div>
            <div className="menu-button">
                <Link to='/stats'>Stats</Link>
            </div>
            <div className="menu-button">
                <Link to='/chat'>Chat</Link>
            </div>
            <div className="menu-button">
                <Link to='/games'>Games</Link>
            </div>
        </div>
    )
}

export default mainMenu

import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile'
import menuButton from '../assets/images/menu-button.png'

const MainMenu = () => {
    return (
        <div className= "container">
            <Profile/>
            <div className="menu-button">
                <Link to='/menu'>
                  <img src={menuButton} alt="menu button"/> 
                </Link>
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
            <div className="logo">
                <img src="#" alt="logo" />
            </div>
        </div>
    )
}

export default MainMenu

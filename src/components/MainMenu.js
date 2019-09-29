import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import menuButton from '../assets/images/menu-button.png';
import sellButton from '../assets/images/sell-button.png';
import statsButton from '../assets/images/stats-button.png';
import chatButton from '../assets/images/chat-button.png';
import logo from '../assets/images/logo-small.png';

const MainMenu = () => {
  return (
    <div className= "main-menu-div">
      <div className="main-menu-buttons menu-button">
        <Link to='/menu'>
          <img src={menuButton} alt="menu button"/> 
        </Link>
      </div>
      <div className="main-menu-buttons sell-button">
        <Link to='/sell'>
          <img src={sellButton} alt="sell button" /> 
        </Link>
      </div>
      
      <div className="main-menu-buttons stats-button">
        <Link to='/stats'>
          <img src={statsButton} alt="stats button" />
        </Link>
      </div>
      
      <div className="main-menu-buttons chat-button">
        <Link to='/chat'>
          <img src={chatButton} alt="chat button" />
        </Link>
      </div>
      
      <div className="main-menu-buttons games-button">
        <Link to='/games'>Games</Link>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default MainMenu

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Profile from './Profile';
import menuButton from '../assets/images/menu-button.png';
import sellButton from '../assets/images/sell-button.png';
import statsButton from '../assets/images/stats-button.png';
import chatButton from '../assets/images/chat-button.png';
import gameButton from '../assets/images/games-button.png';
import logo from '../assets/images/logo-small.png';
import './main-menu.css';
import { connect } from 'react-redux';

const MainMenu = (props) => {
  const { auth } = props;
  if (!auth.uid) return <Redirect to='/' />
  return (
    <div className="main-menu-page">
      <Profile />
      <div className= "main-menu-buttons-div">
          <Link to='/menu'>
            <img className="main-menu-buttons sell-button" src={menuButton} alt="menu button"/> 
          </Link>

          <Link to='/sell'>
            <img className="main-menu-buttons sell-button" src={sellButton} alt="sell button" /> 
          </Link>
        
          <Link to='/stats'>
            <img className="main-menu-buttons sell-button" src={statsButton} alt="stats button" />
          </Link>
        
          <Link to='/chat'>
            <img className="main-menu-buttons sell-button" src={chatButton} alt="chat button" />
          </Link>

          <Link to='/games'>
            <img className="main-menu-buttons game-button" src={gameButton} alt="game button" />
          </Link>
      </div>
          <Link to='/'>
            <img className="logo-main-menu" src={logo} alt="logo" />
          </Link>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}
export default connect(mapStateToProps)(MainMenu)

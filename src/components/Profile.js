import React, { Component } from 'react'
import './profile.css'
import { fadeIn, fadeOut } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const FadeIn = styled.div`animation: 1s ease-in ${keyframes`${fadeIn}`}`

export class Profile extends Component {
  constructor(props){
    super(props)

    this.state = {
      selected: false,
    }
  }
  
  handleToggle = () => {
    const wrapper = document.getElementById('options');
    wrapper.classList.toggle('is-profile-open')
    this.setState((prevState) => {
      if (this.state.selected) {
        return { selected: false }
      } else {
        return { selected: true }
      }
    })
    console.log(this.state)
  }
  
  
  render() {
    let borderStyles = {
    }
    if (this.state.selected) {
      borderStyles = { 
        transform: 'scale(.5, .5)',
        backgroundColor: '#FCF6CA',
      };
    }else {
      borderStyles = {};
    }

    return (
      <div className="profile">
        <div className="table options" id="options">
          <ul id="list">
            <li className="name">Josh Mabry:</li>
            <li className="balance">$100.00 </li>
            <li> | </li>
            <li className="add-funds">Add Funds </li>
            <li> | </li>
            <li className="profile">Profile </li>
            <li> | </li>
            <li className="logout">Logout </li>
          </ul>
        </div>
        <div style={borderStyles} onClick={this.handleToggle} className="profile-button">
          <h4 className="initials">JM</h4>
        </div>
        <div className="profile-mask"></div>
      </div>
    )
  }
}

export default Profile

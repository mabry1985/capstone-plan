import React, { Component } from 'react'
import './profile.css'
import { fadeIn, fadeOut } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const FadeIn = styled.div`animation: 1s ease-in ${keyframes`${fadeIn}`}`
const FadeOut = styled.div`animation: 1s ease-in ${keyframes`${fadeOut}`}`

export class Profile extends Component {
  constructor(props){
    super(props)

    this.state = {
      selected: false,
    }
  }
  
  handleToggle = () => {
    this.setState((prevState) => {
      if (this.state.selected) {
        return { selected: false }
      } else {
        return { selected: true }
      }
    })
    console.log(this.state)
  }
  
  borderStyles = {
  }

  render() {
    let options = null
    if (this.state.selected) {
      this.borderStyles = { 
        transform: 'scale(.5, .5)',
        backgroundColor: '#FCF6CA',
      };
      options = 
      <FadeIn>
      {/* <FadeOut> */}
        <div className="table">
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
        {/* </FadeOut> */}
      </FadeIn>

    }else {
      this.borderStyles = {};
    }

    return (
      <div className="profile">
        <FadeIn>
          {options}
        </FadeIn>
  
        <div style={this.borderStyles} onClick={this.handleToggle} className="profile-button">
          <h4 className="initials">JM</h4>
        </div>
      </div>
    )
  }
}

export default Profile

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import './profile.css'
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import { logOut } from './../actions/authActions';

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
  }

  handleLogOut = () => {

  }

  test = () => {
    console.log("Im working")
  }
  
  
  render() {
    let borderStyles = {}
    if (this.state.selected) {
      borderStyles = { 
        transform: 'scale(.5, .5)',
        backgroundColor: '#FCF6CA',
      };
    }else {
      borderStyles = {};
    }
    const{ profile } = this.props;
    return (
      <div className="profile">
        <p className="log-out-test" onClick={this.props.logOut}>Log-Out</p>
        <div className="table options" id="options">
          <ul id="list">
            <li className="name">{profile.firstName} {profile.lastName} :</li>
            <li className="balance">${profile.balance}.00 </li>
            <li> | </li>
            {/* <li className="add-funds">Add Funds </li>
            <li> | </li>
            <li className="profile">Profile </li>
            <li> | </li> */}
            <li onClick={this.props.logOut} className="logout">Log Out</li>
          </ul>
        </div>
        <div style={borderStyles} onClick={this.handleToggle} className="profile-button">
          <h4 className="initials">{profile.initials}</h4>
        </div>
        <div className="profile-mask"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)

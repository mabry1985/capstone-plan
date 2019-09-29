import React, { Component } from 'react'
import './profile.css'

export class Profile extends Component {
  
  styles = {
  }

  render() {
    return (
      <div className="profile">
        {/* <div className="table">
          <ul id="list">
            <li className="name">Josh Mabry:</li>
            <li className="balance">$100.00 </li>
            <li className="add-funds">Add Funds </li>
            <li> | </li>
            <li className="profile">Profile </li>
            <li> | </li>
            <li className="logout">Logout </li>
          </ul>
        </div>
        <div className="profile-button"> */}
        {/* </div> */}
        <div className="profile-button">
          <h4 style={this.styles} className="initials">JM</h4>
        </div>
      </div>
    )
  }
}

export default Profile

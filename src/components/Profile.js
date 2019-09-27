import React, { Component } from 'react'

export class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile-button">
          <p>JM</p>
        </div>
        <div className="options">
          <ul>
            <li className="name">Josh Mabry</li>
            <li className="balance">Balance: $100.00</li>
            <li className="add-funds">Add Funds</li>
            <li className="logout">Logout</li>
            <li className="profile">Profile</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Profile

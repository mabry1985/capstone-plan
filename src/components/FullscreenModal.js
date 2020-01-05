import React, { Component } from 'react'
import './fullscreen-modal.css'

export class FullscreenModal extends Component {

  toggleFullScreen = () => {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
    this.props.onModalToggle()
  }

  render() {
    return (
      <div id="fullscreen-modal">
        <p id="fullscreen-message">This app was designed to be a native app for a tablet and is best viewed in fullscreen mode</p>
        <div className="fullscreen-button-container">
          <a onClick={this.toggleFullScreen}> <p className="fullscreen-modal-button" >Go Fullscreen</p></a>
          <a  onClick={this.props.onModalToggle}><p className="fullscreen-modal-button">I'm Already Fullscreen</p></a>
        </div>
      </div>
    )
  }
}
export default FullscreenModal
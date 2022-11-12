import React, { Component } from 'react'
import "./TransactionHeader.scss"
import TransaxnLogo from "../TransactionHeader/Images/TRANSAXNLogo.png"
import ProfileIcon from "../TransactionHeader/Images/ProfileIcon.png"

export default class TransactionHeader extends Component {
  render() {
    return (
      <div className='head'>
        <img src={TransaxnLogo} alt="Transaxn Logo" className='Logo'></img>
        <img src={ProfileIcon} alt="ProfileIcon" className='Profile'></img>
          <hr/>
      </div>
    )
  }
}

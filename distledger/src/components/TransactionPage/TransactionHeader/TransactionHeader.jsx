import React, { Component } from 'react'
import "./TransactionHeader.scss"
import TransaxnLogo from "../TransactionHeader/Images/TransaxnLogo.png"
import ProfileIcon from "../TransactionHeader/Images/ProfileIcon.png"
import { Link } from "react-router-dom"

export default class TransactionHeader extends Component {
  render() {
    return (
      <div className='head'>
        <Link to='/Dashboard'>
        <button><img src={TransaxnLogo} alt="Transaxn Logo" className='Logo'></img></button>
        </Link>
        <img src={ProfileIcon} alt="ProfileIcon" className='Profile'></img>
          <hr/>
      </div>
    )
  }
}

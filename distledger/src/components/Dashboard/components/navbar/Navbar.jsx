import React from 'react'
import './navbar.scss'
import ProfileIcon from "../../../TransactionPage/TransactionHeader/Images/ProfileIcon.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
        </div>
      </div>
      <img src={ProfileIcon} alt="Profile Icon" className='profile'></img>
    </div>
  )
}

export default Navbar
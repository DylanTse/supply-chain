import React from 'react'
import './sidebar.scss'
import TransaxnLogo from '../../Icons/TransaxnLogo.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <img src={TransaxnLogo} alt="Transaxn Logo" className='Logo'></img>
        </div>
        <hr className="line"/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <span>Dashboard</span>
                </li>
                <p className="title">PAGES</p>
                <li>
                    <span>Transaction History</span>
                </li>
                <li>
                    <span>Business Analytics</span>
                </li>
                <li>
                    <span>Messages</span>
                </li>
                <li>
                    <span>Partner Reviews</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <span>Profile</span>
                </li>
                <li>
                    <span>Log Out</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar
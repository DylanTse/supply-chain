import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widgets/Widget'
import Featured from '../../components/featured/Featured'
import Reminder from '../../components/reminders/Reminder'
import './home.scss'

export const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="balance"/>
          <Widget type="receivables"/>
          <Widget type="payables"/>
        </div>
        <div className="charts">
          <Featured />
          <Reminder />
        </div>
      </div>
    </div>
  )
}


export default Home


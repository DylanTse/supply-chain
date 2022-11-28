import React from 'react'
import './reminder.scss'

const Reminder = () => {
  return (
    <div className='reminder'>
        <h1 className='title'>Reminders</h1>
        <div className='reminders'>
          <div className='reminder1'>
            <h1>17</h1>
            <p>New Customers</p>
          </div>
          <br></br>
          <div className="reminder2">
            <h1>2</h1>
            <p>Transactions to Approve</p>
          </div>
          <br></br>
          <div className="reminder3">
            <h1>4</h1>
            <p>Transactions Due</p>
          </div>
          <br></br>
        </div>
    </div>
  )
}

export default Reminder
import "./TransactionPage.scss"
import React from 'react'

function TransactionPage() {
  return (
    <div className="table-container">
        <table cellSpacing={0}>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>ID</th>
                    <th>Amount</th>
                    <th>Purchaser</th>
                </tr>
            </thead>
        </table>
    </div>
  )
}

export default TransactionPage


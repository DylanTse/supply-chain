import React from 'react'
import "./widget.scss"
import LineChart from "../../Icons/GraphLine.png"

const Widget = ({ type } ) => {
    let data;

        switch(type) {
            case "balance":
                data = {
                    title: "BALANCE"
                };
                break;
            case "receivables":
                data = {
                    title: "RECEIVABLES"
                };
                break;
            case "payables":
                data = {
                    title: "PAYABLES"
                };
        }

  return (
    <div className="widget">
        <div className="left">
        <span className="title">{data.title}</span>
        <span className="link">See details</span>
        </div>
        <img src={LineChart} alt="Line Chart" className='Line'></img>
        <div className="right">
            <div className= "percentage positive">
            <span class="material-symbols-outlined">expand_less</span>
                20%
                {/* Insert arrow up/down icon */}
            </div>
        </div>
    </div>    
  )
}

export default Widget
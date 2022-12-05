import React from 'react'
import "./widget.scss"
import LineChart from "../../Icons/GraphLine.png"
import Graph1 from "../../Icons/Graph1.png"
import Graph2 from "../../Icons/Graph2.png"
import Graph3 from "../../Icons/Graph3.png"

const Widget = ({ type } ) => {
    let data;

        switch(type) {
            case "balance":
                data = {
                    title: "BALANCE",
                    percentage: "20%",
                    chart: Graph1 
                };
                break;
            case "receivables":
                data = {
                    title: "RECEIVABLES",
                    percentage: "13%",
                    chart: Graph2
                };
                break;
            case "payables":
                data = {
                    title: "PAYABLES",
                    percentage: "27%",
                    chart: Graph3
                };
        }

  return (
    <div className="widget">
        <div className="left">
        <span className="title">{data.title}</span>
        <span className="link">See details</span>
        </div>
        <img src={data.chart} alt="Line Chart" className='Line'></img>
        <div className="right">
            <div className= "percentage positive">
            <span class="material-symbols-outlined">expand_less</span>
                {data.percentage}
            </div>
        </div>
    </div>    
  )
}

export default Widget
import "./header.scss"
import cargoVid from "../../images/cargo-ship-footage.mp4"
import { Link } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header">
            <video className="vidTag" autoPlay loop muted>
                <source src={cargoVid} type="video/mp4" />
            </video> 

            <header className="viewport-header">
                <div className="container">
                    <h1>Transaxn</h1>
                    <div className="SignUp">
                        <Link to='/Dashboard'>
                        <button>Log In</button>
                        </Link>

                        <Link to='/Dashboard'>
                        <button>Sign Up</button>
                        </Link>
                    </div>
                    
                </div>
            </header>
        </div>
    )
}
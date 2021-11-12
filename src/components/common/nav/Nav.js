import React from 'react'
import { Link } from "react-router-dom";
import './Nav.css'
import sun from './img/sun.png'
import logo from   './img/logo.png'

const Nav = () => {
    return (
            <div className="nav">
            <div className="left">
                <img src={sun} alt="Sun" />
            </div>
            <div className="mid">
                <img src={logo} alt="Logo" />
            </div>
            <div className="right">
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Nav

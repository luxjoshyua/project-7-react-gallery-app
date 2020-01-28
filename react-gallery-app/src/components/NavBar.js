 import React from "react";
import { NavLink } from "react-router-dom"; 

const NavBar = (props) => {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink to='/dogs'>Dogs</NavLink>
                </li>
                <li>
                    <NavLink to='/computers'>Computers</NavLink>
                </li>
                <li>
                    <NavLink to='/surfing'>Surfing</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar; 
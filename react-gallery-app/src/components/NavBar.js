import React, { Component } from "react";
import {
    NavLink,
    useParams,
} from "react-router-dom"; 

const NavBar = (props) => {
    return (
        <nav className="main-nav">
            <ul>
                {/* make these links dynamic - tags */}
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
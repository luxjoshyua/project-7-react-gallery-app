import React, { Component } from "react";
import {
    NavLink,
    useParams,
} from "react-router-dom"; 

const Nav = (props) => {
    return (
        <nav class="main-nav">
            <ul>
                {/* make these links dynamic - tags */}
                <li>
                    <a href='#'>Cats</a>
                </li>
                <li>
                    <a href='#'>Dogs</a>
                    </li>
                <li>
                    <a href='#'>Computers</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav; 
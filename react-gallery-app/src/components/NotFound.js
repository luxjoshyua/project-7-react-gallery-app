import React from "react";
import unhappyIcon from "../assets/unhappy-icon.svg"; 

// this function passes in a not found message if there are no photos that match the search
const NotFound = (props) => (
    <li className='photo-container not-found unhappy-icon'>
        <img src={unhappyIcon} alt="Unhappy Icon" className="unhappy-img"/>
        <h3>That search did not return any results, please try again.</h3>
  </li>
);

export default NotFound; 
import React from "react";
import unhappyIcon from "../unhappy-icon.svg"; 

// this function passes in a not found message if there are no photos that match the search
const NotFound = (props) => (
    <li className='photo-container not-found unhappy-icon'>
        <img src={unhappyIcon} alt="Unhappy Icon" />
        <h3>Sorry, no photos match your search</h3>
  </li>
);

export default NotFound; 
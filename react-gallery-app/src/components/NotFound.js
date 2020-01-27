import React from 'react';
import unhappyIcon from "../assets/unhappy-icon.svg"; 

const RouteError = (props) => (
   <div className="error-route-container">
       <img src={unhappyIcon} alt="Unhappy Icon" className="unhappy-img"/>
       <h3>
        Apologies, but that page doesn't seem to exist!
       </h3>
   </div>
); 

export default RouteError;
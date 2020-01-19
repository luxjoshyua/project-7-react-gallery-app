import React from "react";

const Photo = (props) => {
    
     return (
        <li>
            <img src={props.url} alt="" />
        </li>
     );
};

export default Photo; 
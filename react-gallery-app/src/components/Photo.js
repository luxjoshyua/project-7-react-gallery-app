import React from "react";

const Photo = props => {
     // Prop data
     const id = props.data.id;
     const secret = props.data.secret;
     const server = props.data.server;
     const farm = props.data.farm; 

     return (
        <li>
            <img src={props.url} alt="" />
        </li>
     )

};

export default Photo; 
import React from "react";
import Photo from "./Photo"; 
import NoPhoto from './NoPhoto'; 

// photo component needs to display li and img elements
const PhotoList = (props) => {

    const results = props.data;
    let photos;

    if (results.length > 0) {
        photos = results.map(photo => 
            <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />
            );
        } else {
            photos = <NoPhoto />;
        }

        return (
            <div className="photo-container">
                <ul>
                    {photos}    
                </ul>
            </div>
        );
}


export default PhotoList; 
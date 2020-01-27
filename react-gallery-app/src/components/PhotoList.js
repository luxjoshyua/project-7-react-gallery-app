import React from "react";
import Photo from "./Photo"; 
import NotFound from "./NoResults";

// photo component needs to display li and img elements
/**
 * ==== Build your app components ====
 * PhotoList component is what holds each photo fetched in the Photo component
 */
const PhotoList = (props) => {

const results = props.photos;
let photos;

if (results.length > 0) {
    photos = results.map(photos => 
        <Photo url={`https://farm${photos.farm}.staticflickr.com/${photos.server}/${photos.id}_${photos.secret}.jpg`} key={photos.id} />
    ); 
    } else {
        photos = <NotFound />
    }

    return (
        <div className="photo-container">
            <h2>Image results for: {props.title}</h2>
            <ul className="photo-list">
                {photos}
            </ul>
        </div>
    )
};


export default PhotoList; 
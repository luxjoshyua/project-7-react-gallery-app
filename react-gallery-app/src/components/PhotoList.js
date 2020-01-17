import React from "react";
import Photo from "./Photo"; 
import NoPhoto from './NoPhoto'; 

// photo component needs to display li and img elements
const PhotoList = (props) => {

    console.log(props);


    return null;

    const results = props.data;

    console.log(results);

    let photos;

    if (results.length > 0) {
        photos = results.map(photo => 
            <Photo data={photo} key={photo.id} />);
            return (
                <div class="photo-container">
                    <h2>Results</h2>
                    <ul>
                        {photos}    
                    </ul>
              </div>
            );
        } else {
        photos = <NoPhoto />;
        return (
            <div class="photo-container">
                <h2>Results</h2>
                <ul>
                    {photos}    
                </ul>
            </div>
        );
    }
}

export default PhotoList; 
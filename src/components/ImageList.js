import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';


/* Here we write code to take the images from the response and then map it on to a
div and display it*/

const ImageList = (props) =>{
    const images = props.images.map(
        (image) => {return <ImageCard key={image.id} image={image} />}
    );

    return <div className='image-list'>{images}</div>;
}


export default ImageList;
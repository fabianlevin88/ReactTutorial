import './ImageList.css'
import ImageCard from './ImageCard';
import React from 'react';

const ImageList = props => {

    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    })

    if (props.images.length === 0) {
        return <div className="ui segment">{props.message}</div>
    }
    
    return (
        <div className="image-list ui segment">{images}</div>
    );
}

export default ImageList;
import React from 'react';

const ImageList = props => {

    const images = props.images.map(({ alt_description, id, urls}) => {
        return <img src={urls.regular} alt={alt_description} key={id}/>
    })

    if (props.images.length === 0) {
        return <div className="ui segment">{props.message}</div>
    }
    
    return (
        <div className="ui segment">{images}</div>
    );
}

export default ImageList;
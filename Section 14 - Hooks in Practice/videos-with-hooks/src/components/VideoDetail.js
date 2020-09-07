import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({ video }) => {
    
    if (!video) {
        return "Loading..."
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (

        <div>
            <div className="frame ui embed">
                <iframe title="video player" src={videoSrc} allowFullScreen/>
            </div>
            <div className="ui raised segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;
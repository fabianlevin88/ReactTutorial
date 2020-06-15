import React from 'react';

const CommentDetails = (props) => {
    
    return(
        <div className="comment">
            <a className="avatar" href="/">
                <img src={props.avatar} alt="avatar"/>
            </a>
            <div className="content">
                <a className="author" href="/">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.date}</span>
                </div>
                <div className="text">
                    {props.post}
                </div>
            </div>
        </div>
    );
}

export default CommentDetails;
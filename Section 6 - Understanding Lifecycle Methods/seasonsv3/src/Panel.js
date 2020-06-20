import React from 'react';
import SeasonDisplay from './SeasonDisplay';

const Panel = props => {

    if (props.error === null && props.latitude === null) {
        return (
            <div className="ui container">
                <div className="ui raised segment">
                    <a id="ribbon" className="ui yellow ribbon label" href='/#'>Section 6 - Understanding Lifecycle Methods</a>
                    <div className="ui active centered inline loader"></div>
                </div>
            </div>
        )
    }
    
    if (props.error === null) {
        return(
            <div className="ui container">
                <div className="ui raised segment">
                    <a id="ribbon" className="ui yellow ribbon label" href='/#'>Section 6 - Understanding Lifecycle Methods</a>
                    <SeasonDisplay latitude={props.latitude} />
                </div>
            </div>
        )
    }
    
    if (props.latitude === null) {
        return(
            <div className="ui container">
                <div className="ui raised segment">
                    <a id="ribbon" className="ui yellow ribbon label" href='/#'>Section 6 - Understanding Lifecycle Methods</a>
                    <h4 className="ui red header">{props.error}</h4>
                </div>
            </div>
        )
    }
}

export default Panel;
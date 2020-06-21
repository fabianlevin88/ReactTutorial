import React from 'react';
import './SeasonDisplay.css';
import Spinner from './Spinner';

const seasonConfig = {
    Summer: {
        text: 'Let\'s hit the beach!!!',
        icon: 'sun',
        color: 'yellow'
    },
    Winter: {
        text: 'Brrrrrr, it is chilly',
        icon: 'snowflake',
        color: 'blue'
    }
}

const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'Summer' : 'Winter';
    } else {
        return latitude > 0 ? 'Winter' : 'Summer';
    }
}

const SeasonDisplay = props => {

    const season = getSeason(props.latitude, new Date().getMonth());
    const { text, icon, color } = seasonConfig[season];
  
    if (props.error === null && props.latitude === null) {
        return (
            <div className="ui container">
                <div className="ui raised segment">
                    <div className="season-display loader">
                        <Spinner message="Please accept geolocation request" />
                    </div>
                </div>
            </div>
        )
    }
    
    if (props.error === null) {
        return(
            <div className="ui container">
                <div className={`ui raised segment ${season}`}>
                    <a id="ribbon" className={`ui ${color} ribbon label`} href='/#'>Section 6 - Understanding Lifecycle Methods</a>
                    <div className={`season-display ${season}`}>
                        <i className={`icon-left ${icon} massive ${color} icon` } />
                        <h1 className={`ui header ${color}`}>{text}</h1>
                        <i className={`icon-right ${icon} massive ${color} icon` } />
                    </div>
                </div>
            </div>
        )
    }

    if (props.latitude === null) {
        return(
            <div className="ui container">
                <div className="ui raised segment">
                    <a id="ribbon" className="ui red ribbon label" href='/#'>Section 6 - Understanding Lifecycle Methods</a>
                    <div className={`season-display`}>
                        <h1 className="ui red header">{props.error}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default SeasonDisplay;
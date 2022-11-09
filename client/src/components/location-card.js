import {useState} from 'react';
import './location-card.css';

const LocationCard = (props) => {
    let location = props.location;
    return (
        <div className="location-card">
            <strong>{location.address.locationName}</strong><br/>
            {location.address.line1}<br/>
            {location.address.city}<br/>
            {location.address.zip}<br/>
            Hours: {location.pollingHours}<br/>
        </div>
    )
}

export default LocationCard;
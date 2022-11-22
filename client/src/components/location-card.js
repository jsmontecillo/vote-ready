import {useState} from 'react';
import './location-card.css';

const LocationCard = (props) => {
    let t = props.t;
    let location = props.location;
    return (
        <div className="location-card">
            <strong>{location.address.locationName}</strong><br/>
            {location.address.line1}<br/>
            {location.address.city}<br/>
            {location.address.zip}<br/>
            {t('hours')}: {location.pollingHours}<br/>
        </div>
    )
}

export default LocationCard;
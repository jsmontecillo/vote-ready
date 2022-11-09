import {useState} from 'react';

const LocationCard = (props) => {
    let location = props.location;
    return (
        <div className="location-card">
            <strong>{location.address.locationName}</strong><br/>
            {location.address.city}<br/>
            Hours: {location.pollingHours}<br/>
        </div>
    )
}

export default LocationCard;
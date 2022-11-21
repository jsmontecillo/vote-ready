import {useState, useEffect} from 'react';
import Card from './card';

const SavedCard = (props) => {
    const [deleted, setDeleted] = useState(false);
    let candidate = props.candidate;
    let entry = props.savedEntry;
    
    const handleRemove = async () => {
        setDeleted(!deleted);
        let response = await fetch(`api/saved/${entry}`, {method: "DELETE"})
        await response.json();
    }

    return (
        <>
            {deleted ? (null) : (
                <>
                <Card candidate={candidate} contest="TODO"/>
                <button type="button" onClick={() => handleRemove()} style={{position: "absolute", marginTop: "-80px", zIndex: "11", marginLeft: "50px"}}>-</button>
                </>)}
        </>
    )
}

export default SavedCard;
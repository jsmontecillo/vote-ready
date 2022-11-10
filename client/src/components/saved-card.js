import {useState, useEffect} from 'react';

const SavedCard = (props) => {
    let candidate = props.candidate;
    let entry = props.savedEntry;
    
    const handleRemove = async (entryId) => {
        let response = await fetch(`api/saved/${entryId}`, {method: "DELETE"})
        await response.json();
    }

    return (
        <div className="candidate-card">
            <button type="button" onClick={() => handleRemove()}>-</button>
            <h4>{candidate.name}</h4>
            <h4>{candidate.party ? candidate.party : null}</h4>
            <p>{candidate.phone || null}</p>
            <p>{candidate.candidateUrl || candidate.url}</p>
        </div>
    )
}

export default SavedCard;
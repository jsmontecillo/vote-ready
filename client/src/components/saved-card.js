import {useState, useEffect} from 'react';

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
                <div className="candidate-card">
                    <button type="button" onClick={() => handleRemove()}>-</button>
                    <h4>{candidate.name}</h4>
                    <h4>{candidate.party ? candidate.party : null}</h4>
                    <p>{candidate.phone || null}</p>
                    <p>{candidate.candidateUrl || candidate.url}</p>
                </div>)}
        </>
    )
}

export default SavedCard;
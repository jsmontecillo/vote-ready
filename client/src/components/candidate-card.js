import './candidate-card.css';
import {useState} from 'react';

const CandidateCard = (props) => {
    const [isSaved, setSaved] = useState(false);
    let candidate = props.candidate;
    let contest = props.contest;

    const handleSaved = () => {
        setSaved(!isSaved);
    }
    return (
        <div className="card">
            <button type="button" onClick={handleSaved}>{isSaved ? <h3>-</h3> : <h3>+</h3>}</button>
            <h4>{candidate.name}</h4>
            <h4>{candidate.party ? candidate.party : null}</h4>
        </div>
    )
}

export default CandidateCard;
import './candidate-card.css';

const CandidateCard = (props) => {
    let candidate = props.candidate;
    return (
        <div className="card">
            <h4>{candidate.name}</h4>
            <h4>{candidate.party ? candidate.party : null}</h4>
        </div>
    )
}

export default CandidateCard;
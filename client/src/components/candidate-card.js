
const CandidateCard = (props) => {
    let candidate = props.candidate;
    return (
        <>
            <h4>{candidate.name}</h4>
            <h4>{candidate.party}</h4>
        </>
    )
}

export default CandidateCard;
import CandidateCard from './candidate-card';

const Candidates = (props) => {
    let candidates = props.candidates;
    return (
        <>
            {candidates.map((c) => {
            return (
                <CandidateCard candidate={c} />
            )
            })}
        </>
    )
}

export default Candidates;
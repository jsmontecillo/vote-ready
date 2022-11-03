import CandidateCard from './candidate-card';

const Candidates = (props) => {
    let candidates = props.candidates.candidates;
    return (
        <div style={{width: "1200px", display: "flex"}}>
            {candidates.map((c) => {
            return (
                <CandidateCard candidate={c} contest={props.candidates.ballotTitle}/>
            )
            })}
        </div>
    )
}

export default Candidates;
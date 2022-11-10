import CandidateCard from './candidate-card';
import {useEffect, useState} from 'react';

const Candidates = (props) => {
    const contestCandidates = props.candidates.candidates;
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        fetch("/api/candidate")
          .then((response) => response.json())
          .then((candidates) => {
                setCandidates(candidates);
            });
    }, []);

    return (
        <div style={{width: "1200px", display: "flex"}}>
            {contestCandidates.map((c) => {
                let thisCandidate = candidates.find((can) => can.name === c.name);
            return (
                <CandidateCard candidate={c} contest={props.candidates.ballotTitle} user={props.user} candidateId={thisCandidate.id}/>
            )
            })}
        </div>
    )
}

export default Candidates;
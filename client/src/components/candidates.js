import CandidateCard from './candidate-card';
import {useEffect, useState} from 'react';
import Fade from 'react-reveal/Fade';


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
        <div>
            <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                {contestCandidates.map((c) => {
                    let thisCandidate = candidates.find((can) => {
                        return can.name.toLowerCase() === c.name.toLowerCase();
                    });
                return (
                    <Fade left>
                        <CandidateCard candidate={c} contest={props.candidates.ballotTitle} user={props.user} candidateId={thisCandidate} t={props.t}/>
                    </Fade>
                )
                })}
            </div>
        </div>

    )
}

export default Candidates;
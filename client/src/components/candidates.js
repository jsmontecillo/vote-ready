import CandidateCard from './candidate-card';

    //save the candidate from props into database - post request
    const saveCandidate = (candidate) => {
        console.log(candidate);
        return fetch('/api/candidate', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(candidate),
        })
      }

const Candidates = (props) => {
    let candidates = props.candidates.candidates;

    candidates.map((c) => saveCandidate({
        name: c.name,
        party: c.party || null,
        email: c.email || null,
        phone: c.phone || null,
        url: c.candidateUrl || null,
        facebook: null,
        twitter: null,
      }))

    return (
        <div style={{width: "1200px", display: "flex"}}>
            {candidates.map((c) => {
            return (
                <CandidateCard candidate={c} contest={props.candidates.ballotTitle} user={props.user}/>
            )
            })}
        </div>
    )
}

export default Candidates;
import './candidate-card.css';
import {useState} from 'react';

const CandidateCard = (props) => {
    const [isSaved, setSaved] = useState(false);
    const [savedInfo, setSavedInfo] = useState({
        user_id: "",
        saved: "",
    });
    const [savedEntryId, setSavedEntryId] = useState('');
    console.log(props.user);
    let candidate = props.candidate;
    let contest = props.contest;

    //save the candidate from props into database - post request

    console.log("candidate card", candidate);

    const handleSaved = (name) => {
        setSaved(!isSaved);
        setSavedInfo((savedInfo) => ({user_id: props.user.user_id, saved: name}));
        return fetch(`/api/saved/${props.user.user_id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(savedInfo),
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log("From the post ", data);
              setSavedEntryId(data.id);
            });
    }

    const handleRemove = async () => {
      let response = await fetch(`http://localhost:8888/api/saved/${savedEntryId}`, {method: "DELETE"})
      await response.json();
    }
    return (
        <div className="card">
            {props.user ? (<button type="button" onClick={() => {isSaved ? handleRemove() : handleSaved(candidate.name)}}>{isSaved ? <h3>-</h3> : <h3>+</h3>}</button>) : (null)}
            <h4>{candidate.name}</h4>
            <h4>{candidate.party ? candidate.party : null}</h4>
            <p>{candidate.phone || null}</p>
            <p>{candidate.email || null}</p>
            <p>{candidate.candidateUrl || null}</p>

        </div>
    )
}

export default CandidateCard;
import './candidate-card.css';
import {useState} from 'react';

const CandidateCard = (props) => {
    const [isSaved, setSaved] = useState(false);
    const [savedInfo, setSavedInfo] = useState({
        user_id: "",
        saved: "",
    });
    console.log(props.user);
    let candidate = props.candidate;
    let contest = props.contest;

    const handleSaved = (name) => {
        setSaved(!isSaved);
        setSavedInfo((savedInfo) => ({user_id: props.user.user_id, saved: name}));
        return fetch(`http://localhost:8888/api/saved/${props.user.user_id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(savedInfo),
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log("From the post ", data);
              props.addUser(data);
            });
    }
    return (
        <div className="card">
            {props.user ? (<button type="button" onClick={() => {handleSaved(candidate.name)}}>{isSaved ? <h3>-</h3> : <h3>+</h3>}</button>) : (null)}
            <h4>{candidate.name}</h4>
            <h4>{candidate.party ? candidate.party : null}</h4>
        </div>
    )
}

export default CandidateCard;
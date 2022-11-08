import './candidate-card.css';
import {useState, useEffect} from 'react';


const CandidateCard = (props) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetch("/api/users")
        .then((response) => response.json())
        .then((users) => {
              setUsers(users);
          });
    }, []);
    let foundUser = users.find(el => el.email === props.user.email);
    const [isSaved, setSaved] = useState(false);
    const [savedEntryId, setSavedEntryId] = useState('');
    let candidate = props.candidate;
    let contest = props.contest;


    const handleSaved = async (name) => {
        setSaved(!isSaved);
        let savedInfo = {user_id: foundUser.id, candidate_id: name};
        console.log(savedInfo);
        return await fetch(`/api/saved/${foundUser.id}`, {
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

    console.log(savedEntryId);

    const handleRemove = async () => {
      setSaved(!isSaved);
      let response = await fetch(`api/saved/${savedEntryId}`, {method: "DELETE"})
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
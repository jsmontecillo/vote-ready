import './candidate-card.css';
import {useState, useEffect} from 'react';


const CandidateCard = (props) => {
    const [users, setUsers] = useState([]);
    const [savedEntryId, setSavedEntryId] = useState('');
    useEffect(() => {
      fetch("/api/users")
        .then((response) => response.json())
        .then((users) => {
              setUsers(users);
          });

      //TODO FETCH
    }, []);

    let foundUser;
    if(props.user){
      foundUser = users.find(el => el.email === props.user.email);
    };

  

    const [isSaved, setSaved] = useState(false); //TODO
    let candidate = props.candidate;
    let contest = props.contest;

    const handleSaved = async (name) => {
        setSaved(!isSaved);
        if(props.user){
          let savedInfo = {user_id: foundUser.id, candidate_id: name};
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
    }

    const handleRemove = async () => {
      setSaved(!isSaved);
      let response = await fetch(`api/saved/${savedEntryId}`, {method: "DELETE"})
      await response.json();
    }
    return (
        <div className="candidate-card">
            {props.user ? (<button type="button" onClick={() => {isSaved ? handleRemove() : handleSaved(candidate.name)}}>{isSaved ? <h3>-</h3> : <h3>+</h3>}</button>) : (null)}
            {props.saved ? (<button type="button" onClick={() => handleRemove()}>-</button>):(null)}
            <h4>{candidate.name}</h4>
            <h4>{candidate.party ? candidate.party : null}</h4>
            <p>{candidate.phone || null}</p>
            <p>{candidate.candidateUrl || candidate.url}</p>

        </div>
    )
}

export default CandidateCard;
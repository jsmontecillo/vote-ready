import './candidate-card.css';
import {useState, useEffect} from 'react';


const CandidateCard = (props) => {
    const [users, setUsers] = useState([]);
    const [savedEntryId, setSavedEntryId] = useState('');
    const [isSaved, setIsSaved] = useState(false); 
    const [saved, setSaved] = useState([]);
    const [thisUser, setThisUser] = useState(null);

    //saving props
    let candidate = props.candidate;
    let contest = props.contest;
    useEffect(() => {
      fetch('/api/users')
        .then((response) => response.json())
        .then((users) => {
              setUsers(users);
          });
    }, []);

    let foundUser;
    if(props.user){
      foundUser = users.find(el => el.email === props.user.email);
    }
    useEffect(() => {
      fetch('/api/saved')
        .then((response) => response.json())
        .then((saved) => {
          setSaved(saved);
      });
            //searching for user currently logged in
        //check if user has saved candidate already
        if(props.user && foundUser){
          let currentUser = saved.filter((entry) => {
            return entry.user_id === foundUser.id;
           });
           if(currentUser.length > 0){
            let alreadySaved = currentUser.map((entry) => {
              if(props.candidateId && entry){
                if(entry.candidate_id === props.candidateId.id){
                  setIsSaved(true);
                  setSavedEntryId(entry.id);
                  return true;
                }
              }
            });
            }         
          }
    }, [saved.length, foundUser]);   


    const handleSaved = async (id) => {
      console.log(foundUser);
      setIsSaved(!isSaved);
        if(props.user && foundUser){
          console.log(id)
          let savedInfo = {user_id: foundUser.id, candidate_id: id};
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
              });
        }
    }

    //TODO: GET ENTRYID FROM DATABASE
    const handleRemove = async (entryId) => {
      setIsSaved(!isSaved);
      let response = await fetch(`api/saved/${entryId}`, {method: "DELETE"})
      await response.json();
    }
    return (
        <div className="candidate-card">
            {props.user ? (<button type="button" onClick={() => {isSaved ? handleRemove(savedEntryId) : handleSaved(props.candidateId.id)}}>{isSaved ? <h3>-</h3> : <h3>+</h3>}</button>) : (null)}
            <h4>{candidate.name}</h4>
            <h4>{candidate.party ? candidate.party : null}</h4>
            <p>{candidate.phone || null}</p>
            <p>{candidate.candidateUrl || candidate.url}</p>
        </div>
    )
}

export default CandidateCard;
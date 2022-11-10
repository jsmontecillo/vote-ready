import {useState, useEffect} from 'react';
import SavedCard from './saved-card';

const Saved = (props) => {
    const [contests, setContests] = useState([]);
    const [saved, setSaved] = useState([]);
    const [users, setUsers] = useState([]);
    const [savedEntries, setSavedEntries] = useState([]);
    const [currentSavedEntry, setCurrentSavedEntry] = useState(null);

    useEffect(() => {
        fetch('/election')
          .then((response) => response.json())
          .then((users) => {
            setContests(users.contests);
        });
    }, []);

    useEffect(() => {
        fetch('api/users')
          .then((response) => response.json())
          .then((users) => {
                setUsers(users);
        });
        fetch('/api/saved')
          .then((response) => response.json())
          .then((saved) => {
            setSavedEntries(saved);
        });
    }, []);
    let found = users.find((user) => user.email === props.user.email);

    useEffect(() => {
        if(found){
            fetch(`/api/saved/${found.id}`)
            .then((response) => response.json())
            .then((saved) => {
                setSaved(saved);
            });
        }    
    }, [saved.length, found]);

    const findingEntry = (c) => {
        let currentUser = savedEntries.map((entry) => {
            if(entry.user_id === found.id) return entry;
        });

        let alreadySaved = currentUser.map((entry) => {
            if(c){
                console.log(c);
                if(entry.candidate_id === c.candidate_id){
                    console.log(entry.id);
                    //TO DO FIX STATE
                    //setCurrentSavedEntry(() => entry.id);
                    return true;
                }
            }
        });
    }

    return (
        <>
            <h1>Your Saved Candidates</h1>
            {saved.map((c) => {    
                findingEntry(c);                       
                return(<SavedCard candidate={c} savedEntry={currentSavedEntry} />)
            })}
        </>
    )
}

export default Saved;
import {useState, useEffect} from 'react';
import SavedCard from './saved-card';
import Fade from 'react-reveal/Fade';

const Saved = (props) => {
    let t = props.t;
    const [contests, setContests] = useState([]);
    const [saved, setSaved] = useState([]);
    const [users, setUsers] = useState([]);
    const [savedEntries, setSavedEntries] = useState([]);

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
            if(found.id){
                if(entry.user_id === found.id){
                    return entry
                };
            }
        });

        let alreadySaved = currentUser.filter((entry) => {
            if(c && entry){
                if(entry.candidate_id === c.candidate_id){
                    return true;
                }                
            }

        });
        if(alreadySaved[0].id){
            return alreadySaved[0].id;
        }
        
    }

    return (
        <>
            <h1 style={{color: "white"}}>{t('your_saved')}</h1>
            <div className="saved-container">
                {saved.map((c) => {    
                let currentEntry = findingEntry(c);
                console.log(currentEntry);                       
                return(
                    <Fade left>
                        <div className="saved-child">
                            <SavedCard candidate={c} savedEntry={currentEntry} />
                        </div>
                    </Fade>
                )
                })}
            </div>
        </>
    )
}

export default Saved;
import {useState, useEffect} from 'react';
import CandidateCard from './candidate-card';

const Saved = (props) => {
    const [contests, setContests] = useState([]);
    const [saved, setSaved] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("/election")
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
    }, []);
    let found = users.find((user) => user.email === props.user.email);

    useEffect(() => {
        if(found){
            fetch(`/api/saved/${found.id}`)
            .then((response) => response.json())
            .then((saved) => {
              setSaved(saved);
          });}
    }, [saved]);
    console.log(saved);

    return (
        <>
            {/*contests.map((c) => {
                <h1>{c.ballotTitle}</h1>
            })*/}
            {saved.map((c) => {
                return(<CandidateCard candidate={c} user={found}/>)
            })}
        </>
    )
}

export default Saved;
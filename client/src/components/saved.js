import {useState, useEffect} from 'react';

const Saved = () => {
    const [contests, setContests] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8888/election")
          .then((response) => response.json())
          .then((users) => {
                setContests(users.contests);
            });
    }, []);
    
    console.log(contests);
    return (
        <>
            {contests.map((c) => {
                <h1>{c.ballotTitle}</h1>
            })}
        </>
    )
}

export default Saved;
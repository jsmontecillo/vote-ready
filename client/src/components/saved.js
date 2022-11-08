import {useState, useEffect} from 'react';

const Saved = (props) => {
    const [contests, setContests] = useState([]);
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        fetch("/election")
          .then((response) => response.json())
          .then((users) => {
                setContests(users.contests);
            });
    }, []);

    useEffect(() => {
        fetch(`/api/saved/${props.user.user_id}`)
        .then((response) => response.json())
        .then((saved) => {
          setSaved(saved);
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
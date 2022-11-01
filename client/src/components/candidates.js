import {useState, useEffect} from 'react';

const Candidates = () => {
    const [contests, setContests] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8888/election")
          .then((response) => response.json())
          .then((users) => {
                setContests(users.contests);
            });
    }, [contests]);

    return (
        <>
            <h1>Hello</h1>
        </>
    )
}

export default Candidates;
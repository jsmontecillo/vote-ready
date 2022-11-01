import {useState, useEffect} from 'react';

const Candidates = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8888/api/candidates")
          .then((response) => response.json())
          .then((users) => {
                setCandidates(users);
            });
    }, [candidates]);

    return (
        <>
            <h1>Hello</h1>
        </>
    )
}

export default Candidates;
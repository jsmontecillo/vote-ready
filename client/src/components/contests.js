import {useState, useEffect} from 'react';
import ContestCard from './contest-card';

const Contests = () => {
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
                return (
                    <ContestCard contest={c} />
                )
            })}
        </>
    )
}

export default Contests;
import {useState, useEffect} from 'react';
import ContestCard from './contest-card';

const Contests = (props) => {
    const [contests, setContests] = useState([]);

    useEffect(() => {
        // fetch("/election")
        //   .then((response) => response.json())
        //   .then((users) => {
        //     setContests(users.contests);
        // });
        fetch('/election-data.json')
          .then((response) => response.json())
          .then((election) => {
            console.log(election.contests);
            setContests(election.contests);
          });
    }, []);

    return (
        <>
            {contests.map((c) => {
                return (
                    <ContestCard contest={c} user={props.user}/>
                )
            })}
        </>
    )
}

export default Contests;
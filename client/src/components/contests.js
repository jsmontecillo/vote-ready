import {useState, useEffect} from 'react';
import ContestCard from './contest-card';
import Fade from 'react-reveal/Fade';

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
        <div className="container">
            <div className="contests">
            <div style={{marginTop: "20%"}}>
                <h1 className="horizontal">MEET THE CANDIDATES</h1>
            </div>
                {contests.map((c) => {
                    return (
                        <Fade right>
                            <div>
                            <ContestCard contest={c} user={props.user}/>
                            </div>
                        </Fade>
                    )
                })}
            </div>
        </div>
    )
}

export default Contests;
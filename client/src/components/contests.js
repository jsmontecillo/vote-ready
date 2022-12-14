import {useState, useEffect} from 'react';
import ContestCard from './contest-card';
import Fade from 'react-reveal/Fade';

const Contests = (props) => {
    let t = props.t;
    const [contests, setContests] = useState([]);

    useEffect(() => {
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
                    <h5 className="horizontal">{t('meet').toUpperCase()}</h5>
                    <span className="circle"></span>
                    <span className="circle2"></span>
                </div>
                {contests.map((c) => {
                    return (
                        <Fade right>
                            <div>
                                <ContestCard contest={c} user={props.user} t={t}/>
                            </div>
                        </Fade>
                    )
                })}
            </div>
        </div>
    )
}

export default Contests;
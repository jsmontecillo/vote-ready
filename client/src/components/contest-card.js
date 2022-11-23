import Candidates from './candidates';

const ContestCard = (props) => {
    let contest = props.contest;
    return (
        <div>
            {/* <h1>{contest.ballotTitle}</h1> */}
            {contest.candidates ? <div className="cand"><Candidates candidates={contest} user={props.user} t={props.t}/></div> : (<p>{contest.referendumText}</p>)}
        </div>
    )
}

export default ContestCard;
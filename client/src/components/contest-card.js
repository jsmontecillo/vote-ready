import Candidates from './candidates';

const ContestCard = (props) => {
    let contest = props.contest;
    return (
        <div>
            {/* <h1>{contest.ballotTitle}</h1> */}
            {contest.candidates ? <><Candidates candidates={contest} user={props.user} t={props.t}/></> : (<p>{contest.referendumText}</p>)}
        </div>
    )
}

export default ContestCard;
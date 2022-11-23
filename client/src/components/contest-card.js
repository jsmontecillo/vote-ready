import Candidates from './candidates';

const ContestCard = (props) => {
    let contest = props.contest;
    return (
        <div>
            {contest.candidates ? <div className="cand"><Candidates candidates={contest} user={props.user} t={props.t}/></div> : (<p>{contest.referendumText}</p>)}
        </div>
    )
}

export default ContestCard;
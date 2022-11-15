import Candidates from './candidates';

const ContestCard = (props) => {
    let contest = props.contest;
    return (
        <>
            {/* <h1>{contest.ballotTitle}</h1> */}
            {contest.candidates ? <><Candidates candidates={contest} user={props.user}/></> : (<p>{contest.referendumText}</p>)}
        </>
    )
}

export default ContestCard;
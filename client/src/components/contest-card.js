import Candidates from './candidates';

const ContestCard = (props) => {
    let contest = props.contest;
    return (
        <>
            <h1>{contest.ballotTitle}</h1>
            {contest.candidates ? <><h3>Candidates</h3><Candidates candidates={contest} user={props.user}/></> : (<p>{contest.referendumText}</p>)}
        </>
    )
}

export default ContestCard;
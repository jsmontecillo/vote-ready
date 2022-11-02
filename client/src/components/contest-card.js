import Candidates from './candidates';

const ContestCard = (props) => {
    let contest = props.contest;
    return (
        <>
            <h1>{contest.ballotTitle}</h1>
            <h3>Candidates</h3>
        </>
    )
}

export default ContestCard;
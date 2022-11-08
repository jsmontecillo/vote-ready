import {useState, useEffect} from 'react';

const Saved = (props) => {
    const [contests, setContests] = useState([]);
    const [saved, setSaved] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("/election")
          .then((response) => response.json())
          .then((users) => {
                setContests(users.contests);
            });
    }, []);

    useEffect(() => {
        fetch('api/users')
          .then((response) => response.json())
          .then((users) => {
                setUsers(users);
            });
    }, []);
    let found = users.find((user) => user.email === props.user.email);
    console.log("found?", found.id || null)

    useEffect(() => {
        if(found){
            fetch(`/api/saved/${found.id}`)
            .then((response) => response.json())
            .then((saved) => {
              setSaved(saved);
          });
        }
    }, []);

    console.log(saved);
    return (
        <>
            <h1>Hello</h1>
            {/*contests.map((c) => {
                <h1>{c.ballotTitle}</h1>
            })*/}
            {saved.map((c) => {
                return(<h1>Hi</h1>)
            })}
        </>
    )
}

export default Saved;
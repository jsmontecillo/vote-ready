import {useState} from 'react';
import './profile.css';
import './default.jpg';

const Profile = (props) => {
    let user = props.user;
    return (
        <div>
            <img src={user.picture} alt={user.nickname} className="profile-img"/>
            <h1>{user.given_name}</h1>
            <h3>{user.nickname}</h3>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
        </div>
    )
}

export default Profile;
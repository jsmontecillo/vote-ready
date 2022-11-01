import {useState} from 'react';
import './profile.css';
import 'default.jpg';

const Profile = (props) => {
    let user = props.user;
    return (
        <div>
            <img src={user.picture} alt={user.nickname} className="profile-img"/>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
        </div>
    )
}

export default Profile;
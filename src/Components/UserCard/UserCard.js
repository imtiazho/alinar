import React from 'react';
import './UserCard.css';
import anonymousUser from '../../assets/anonymous_user.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const UserCard = ({ user, handleMakeModerator, handleTerminateUser }) => {
    const { _id, userName, email, userEmail, userPassWord, userImage, role } = user;

    return (
        <div className='user-card'>
            <img src={user?.userImage || anonymousUser} alt="" />
            <p>{userName ? userName : "Google User"}</p>

            {role === 'admin' ? <p className='admin-sign'>Admin <i class="fa-solid fa-shield-halved"></i></p> : <div className='btn-grp'>
                {role === "moderator" || <button onClick={() => handleMakeModerator(email)}>Make Moderator</button>}
                {role === "moderator" && <p className='admin-sign'>Moderator <i class="fa-solid fa-screwdriver-wrench"></i></p>}
                <button onClick={() => handleTerminateUser(_id)} className='terminate-btn'>Terminate</button>

            </div>}
        </div>
    );
};

export default UserCard;
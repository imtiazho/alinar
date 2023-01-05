import React from 'react';
import './UserCard.css';
import anonymousUser from '../../assets/anonymous_user.png';

const UserCard = ({ user }) => {
    const { userName, userEmail, userPassWord, userImage, role } = user;
    return (
        <div className='user-card'>
            <img src={user?.userImage || anonymousUser} alt="" />
            <p>{userName}</p>

            {role === 'admin' ? <p className='admin-sign'>Admin <i class="fa-solid fa-shield-halved"></i></p> : <div className='btn-grp'>
                <button>Make Moderator</button>
                <button className='terminate-btn'>Terminate</button>
            </div>}
        </div>
    );
};

export default UserCard;
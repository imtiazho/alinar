import React from 'react';
import './UserCard.css';
import anonymousUser from '../../assets/anonymous_user.png';

const UserCard = ({ user }) => {
    const { userName, userEmail, userPassWord, userImage } = user;
    return (
        <div className='user-card'>
            <img src={user?.userImage || anonymousUser} alt="" />
            <p>{userName}</p>

            <div className='btn-grp'>
                <button>Make Admin</button>
                <button className='terminate-btn'>Terminate</button>
            </div>
        </div>
    );
};

export default UserCard;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import './UserProfile.css';
import anonymousUser from '../../assets/anonymous_user.png'
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import Spinner from '../Spinner/Spinner';

const UserProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        <Spinner />
    }
    return (
        <div>
            <div id="dash-board">
                <div className="container">
                    <div className="left-side">
                        <div className="profile">
                            <img src={user.photoURL ? user.photoURL : anonymousUser} alt="" />
                            <p>{user.displayName} <small>(user)</small></p>
                            <div className='edit-profile'>
                                <Link><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Profile</Link>
                            </div>

                        </div>
                    </div>

                    <div className="right-side">
                        <div className="items-short-nav">
                            <CustomLink to="">My Orders</CustomLink>
                            <CustomLink to="allOrders">All Orders</CustomLink>
                            <CustomLink to="allUsers">All Users</CustomLink>
                        </div>
                        <div className="listing-on-rent">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
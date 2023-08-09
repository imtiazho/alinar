import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import './UserProfile.css';
import anonymousUser from '../../assets/anonymous_user.png'
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import Spinner from '../Spinner/Spinner';
import { useQuery } from 'react-query';
import useAdmin from '../../Hooks/useAdmin';
import HelmetComponent from '../HelmetComponent/HelmetComponent';

const UserProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, setAdmin] = useAdmin(user);
    const {
        isLoading,
        userError,
        data,
    } = useQuery("user", () =>
        fetch(`http://server.alinarbd.com/user?userEmail=${user?.email}`).then((res) => res.json())
    );

    if (loading || isLoading) {
        <Spinner />
    }

    return (
        <div>
            <HelmetComponent pageName={`${user.displayName} - alinar`} />
            <div id="dash-board">
                <div className="container">
                    <div className="left-side">
                        <div className="profile">
                            <img src={data?.userImage || anonymousUser} alt="" />
                            <p>{user?.displayName} <small>({data?.role ? data.role : "user"})</small></p>
                            <div className='edit-profile'>
                                <Link to='/editProfile'><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Add Photo</Link>
                            </div>

                        </div>
                    </div>

                    <div className="right-side">
                        <div className="items-short-nav">
                            {admin || <CustomLink to="">My Orders</CustomLink>}
                            {admin && <CustomLink to="allOrders">All Orders</CustomLink>}
                            {admin && <CustomLink to="allUsers">All Users</CustomLink>}
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
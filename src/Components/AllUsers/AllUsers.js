import React from 'react';
import './AllUsers.css';
import { useQuery } from 'react-query';
import Spinner from '../Spinner/Spinner';
import UserCard from '../UserCard/UserCard';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const AllUsers = () => {
    const [user, loading, userError] = useAuthState(auth);
    const {
        isLoading,
        error,
        data: users,
    } = useQuery("shareeData", () =>
        fetch("http://localhost:5000/users").then((res) => res.json())
    );

    if (isLoading) {
        return <Spinner />;
    }

    const handleMakeModerator = (userEmail) => {
        fetch(`http://localhost:5000/userTomoderator/${userEmail}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const handleTerminateUser = (id) => {
        console.log("Terminate User", id);
    }

    return (
        <div className='all-users'>
            {
                users.map(user => <UserCard handleMakeModerator={handleMakeModerator} handleTerminateUser={handleTerminateUser} key={user._id} user={user} />)
            }
        </div>
    );
};

export default AllUsers;
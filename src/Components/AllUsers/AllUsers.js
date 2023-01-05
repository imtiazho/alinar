import React from 'react';
import './AllUsers.css';
import { useQuery } from 'react-query';
import Spinner from '../Spinner/Spinner';
import UserCard from '../UserCard/UserCard';

const AllUsers = () => {
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
    return (
        <div className='all-users'>
            {
                users.map(user => <UserCard key={user._id} user={user} />)
            }
        </div>
    );
};

export default AllUsers;
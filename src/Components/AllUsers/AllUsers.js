import React, { useEffect, useState } from 'react';
import './AllUsers.css';
import { useQuery } from 'react-query';
import Spinner from '../Spinner/Spinner';
import UserCard from '../UserCard/UserCard';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const AllUsers = () => {
    const [user, loading, userError] = useAuthState(auth);
    const navigate = useNavigate();
    const [serverStatus, setServerStatus] = useState(200);
    const [users, setUsers] = useState([]);

    const handleSignOut = () => {
        signOut(auth);
        navigate("/login");
        // toast.success("Something is wrong login again!");
    };

    useEffect(() => {
        fetch("http://server.alinarbd.com/users", {
            headers: {
                authorization: `${user?.email} ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            setServerStatus(res.status);
            if (res.status === 401 || res.status === 403) {
                handleSignOut();
            }
            return res.json()
        }).then(data => setUsers(data))
    }, [user])

    // const {
    //     isLoading,
    //     error,
    //     data: users,
    // } = useQuery("usersData", () =>
    //     fetch("http://server.alinarbd.com/users").then((res) => res.json())
    // );

    if (!serverStatus === 200) {
        return <Spinner />;
    }

    const handleMakeModerator = (userEmail) => {
        const confirmationToMakeModerator = window.confirm("Are you sure to make moderator?");
        if (confirmationToMakeModerator) {
            fetch(`http://server.alinarbd.com/userTomoderator/${userEmail}`, {
                method: "PUT",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success('Successfully converted user to moderator');
                    }
                })
        }
    }

    const handleTerminateUser = (id) => {
        alert("This button is not active right now")
    }

    return (
        <div className='all-users'>
            {
                users?.map(user => <UserCard handleMakeModerator={handleMakeModerator} handleTerminateUser={handleTerminateUser} key={user._id} user={user} />)
            }
        </div>
    );
};

export default AllUsers;
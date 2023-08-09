import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import Spinner from '../Spinner/Spinner';

const Something = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orders, setorders] = useState([]);
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);
    console.log(userData);

    useEffect(() => {
        fetch(`http://server.alinarbd.com/user?userEmail=${userData?.email}`).then(res => res.json()).then(data => setUserData(data))
    }, [userData?.email])

    useEffect(() => {
        fetch('http://server.alinarbd.com/something', {
            method: 'GET',
            headers: {
                authorization: `${userData?.email} ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setorders(data))
    }, [userData?.email])

    if (loading) {
        return <Spinner />
    }

    return (
        <div>
            Something {orders?.length}
        </div>
    );
};

export default Something;
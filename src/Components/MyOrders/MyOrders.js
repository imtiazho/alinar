import React, { useEffect, useState } from 'react';
import './MyOrders.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import MyOrderCard from '../MyOrderCard/MyOrderCard';
import Spinner from '../Spinner/Spinner';
import { toast } from 'react-hot-toast';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
    const [user, loading, UserError] = useAuthState(auth);
    const navigate = useNavigate();
    const [serverStatus, setServerStatus] = useState(200);
    const [data, setData] = useState([]);

    const handleSignOut = () => {
        signOut(auth);
        navigate("/login");
        // toast.success("Something is wrong login again!");
    };

    useEffect(() => {
        fetch(`http://server.alinarbd.com/orders?email=${user?.email}`, {
            headers: {
                authorization: `${user?.email} ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            setServerStatus(res.status);
            if (res.status === 401 || res.status === 403) {
                handleSignOut();
            }
            return res.json()
        }).then(data => setData(data))
    }, [user?.email])

    if (!serverStatus === 200) {
        return <Spinner />;
    }


    const handleDeleteOne = (id) => {
        const confrimToDelete = window.confirm("Are you confirm to delete?");
        if (confrimToDelete) {
            fetch(`http://server.alinarbd.com/order/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `${user?.email} ${localStorage.getItem('accessToken')}`
                }
            })
                .then((res) => {
                    setServerStatus(res.status);
                    if (res.status === 401 || res.status === 403) {
                        handleSignOut();
                    }
                    return res.json()
                })
                .then((data) => {
                    if (data.deletedCount > 0) {
                        toast.success('Order Canceled!')
                    }
                });
        }
    };
    if (serverStatus === 200) {
        return (
            <div className='all-my-order'>
                {data?.map((eachOrder) => <MyOrderCard eachOrder={eachOrder} handleDeleteOne={handleDeleteOne} key={eachOrder._id} />)}
            </div>
        );
    }
};

export default MyOrders;
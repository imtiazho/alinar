import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import auth from '../../Firebase/Firebase.init';
import MyOrderCard from '../MyOrderCard/MyOrderCard';
import Spinner from '../Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const AllOrders = () => {
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
        fetch("http://server.alinarbd.com/allOrders", {
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
    }, [user])

    // const {
    //     isLoading,
    //     error,
    //     data,
    // } = useQuery("ordersData", () =>
    //     fetch("http://server.alinarbd.com/allOrders", {
    //         headers: {
    //             authorization: `${user?.email} ${localStorage.getItem('accessToken')}`
    //         }
    //     }).then((res) => res.json())
    // );
    const {
        isLoading: allProLoad,
        error,
        data: allProducts,
    } = useQuery("Data", () =>
        fetch("http://server.alinarbd.com/allProducts").then((res) => res.json())
    );

    if (!serverStatus === 200 || allProLoad) {
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
                    if (data?.deletedCount > 0) {
                        toast.success('Order Canceled!');
                    }
                });
        }
    };

    const handleConfirmOrder = (id) => {
        const confrimToAccept = window.confirm("Are you confirm to Accept this order?");
        if (confrimToAccept) {
            fetch(`http://server.alinarbd.com/order/${id}`, {
                method: "PUT",
                headers: {
                    authorization: `${user?.email} ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    setServerStatus(res.status);
                    if (res.status === 401 || res.status === 403) {
                        handleSignOut();
                    }
                    return res.json()
                })
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success('Order confirmed');
                    }
                })
        }
    }

    const handleDeliveryCounter = (productName) => {
        const confrimToIncrease = window.confirm("Delivered successfully?");
        const targetedPro = allProducts.find(eachProduct => eachProduct.name === productName);
        const deliveredCount = targetedPro.delivered + 1;
        if (confrimToIncrease) {
            fetch(`http://server.alinarbd.com/productDeliverCounter/${productName}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json',
                    authorization: `${user?.email} ${localStorage.getItem('accessToken')}`,
                },
                body: JSON.stringify({
                    delivered: deliveredCount
                })
            })
                .then(res => {
                    setServerStatus(res.status);
                    if (res.status === 401 || res.status === 403) {
                        handleSignOut();
                    }
                    return res.json()
                })
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success('Delivered Successfully');
                    }
                })
        }

    }

    if (serverStatus === 200) {
        return (
            <div className='all-my-order'>
                {data?.map((eachOrder) => <MyOrderCard eachOrder={eachOrder} handleDeleteOne={handleDeleteOne} handleConfirmOrder={handleConfirmOrder} handleDeliveryCounter={handleDeliveryCounter} key={eachOrder._id} />)}
            </div>
        );
    }
};

export default AllOrders;
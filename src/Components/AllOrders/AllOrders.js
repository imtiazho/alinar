import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import auth from '../../Firebase/Firebase.init';
import MyOrderCard from '../MyOrderCard/MyOrderCard';
import Spinner from '../Spinner/Spinner';

const AllOrders = () => {
    const {
        isLoading,
        error,
        data,
    } = useQuery("ordersData", () =>
        fetch("http://localhost:5000/allOrders").then((res) => res.json())
    );

    if (isLoading) {
        return <Spinner />;
    }

    const handleDeleteOne = (id) => {
        const confrimToDelete = window.confirm("Are you confirm to delete?");
        if (confrimToDelete) {
            fetch(`http://localhost:5000/order/${id}`, {
                method: "DELETE",
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        toast.success('Order Canceled!')
                    }
                });
        }
    };

    const handleConfirmOrder = (id) => {
        const confrimToAccept = window.confirm("Are you confirm to Accept this order?");
        if (confrimToAccept) {
            fetch(`http://localhost:5000/order/${id}`, {
                method: "PUT",
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }

    return (
        <div className='all-my-order'>
            {data.map((eachOrder) => <MyOrderCard eachOrder={eachOrder} handleDeleteOne={handleDeleteOne} handleConfirmOrder={handleConfirmOrder} key={eachOrder._id} />)}
        </div>
    );
};

export default AllOrders;
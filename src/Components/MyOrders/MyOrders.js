import React from 'react';
import './MyOrders.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase/Firebase.init';
import MyOrderCard from '../MyOrderCard/MyOrderCard';
import Spinner from '../Spinner/Spinner';
import { toast } from 'react-hot-toast';

const MyOrders = () => {
    const [user, loading, UserError] = useAuthState(auth);
    const {
        isLoading,
        error,
        data,
    } = useQuery("ordersData", () =>
        fetch(`http://localhost:5000/orders?clientEmail=${user.email}`).then((res) => res.json())
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
    return (
        <div className='all-my-order'>
            {data.map((eachOrder) => <MyOrderCard eachOrder={eachOrder} handleDeleteOne={handleDeleteOne} key={eachOrder._id} />)}
        </div>
    );
};

export default MyOrders;
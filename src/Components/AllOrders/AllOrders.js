import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase/Firebase.init';
import MyOrderCard from '../MyOrderCard/MyOrderCard';
import Spinner from '../Spinner/Spinner';

const AllOrders = () => {
    const [user, loading, UserError] = useAuthState(auth);
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
    return (
        <div className='all-my-order'>
            {data.map((eachOrder) => <MyOrderCard eachOrder={eachOrder} key={eachOrder._id} />)}
        </div>
    );
};

export default AllOrders;
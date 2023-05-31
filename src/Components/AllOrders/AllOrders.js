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
    const {
        DisLoading,
        Derror,
        data: allProducts,
    } = useQuery("Data", () =>
        fetch("http://localhost:5000/allProducts").then((res) => res.json())
    );

    console.log(allProducts)
    if (isLoading || DisLoading) {
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
                        toast.success('Order Canceled!');
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
            fetch(`http://localhost:5000/productDeliverCounter/${productName}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    delivered: deliveredCount
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success('Delivered Successfully');
                    }
                })
        }

    }

    return (
        <div className='all-my-order'>
            {data?.map((eachOrder) => <MyOrderCard eachOrder={eachOrder} handleDeleteOne={handleDeleteOne} handleConfirmOrder={handleConfirmOrder} handleDeliveryCounter={handleDeliveryCounter} key={eachOrder._id} />)}
        </div>
    );
};

export default AllOrders;
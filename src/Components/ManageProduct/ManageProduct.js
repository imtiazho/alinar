import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from 'react-query';
import ManageProductCard from '../ManageProductCard/ManageProductCard';
import Spinner from '../Spinner/Spinner';
import './ManageProduct.css';
import { toast } from 'react-hot-toast';
import HelmetComponent from '../HelmetComponent/HelmetComponent';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { signOut } from 'firebase/auth';

const ManageProduct = () => {
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
        fetch("http://localhost:5000/allProducts", {
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
    // } = useQuery("allProduct", () =>
    //     fetch("http://localhost:5000/allProducts").then((res) => res.json())
    // );
    // if (isLoading) {
    //     return <Spinner />;
    // }

    const deleteProduct = (id) => {
        const confirmationToDelete = window.confirm("Are you sure to delete?");
        if (confirmationToDelete) {
            fetch(`http://localhost:5000/allproduct/${id}`, {
                method: "DELETE",
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
                    if (data.deletedCount > 0) {
                        toast.success('Deleted successfully')
                    }
                })
        }
    }
    console.log(data, serverStatus);
    return (
        <div className='manage-product'>
            <HelmetComponent pageName={"alinar - manage product"} />
            <Link to='/addProduct' className='btn-2'>+ Add New Product</Link>
            {data?.map(product => <ManageProductCard deleteProduct={deleteProduct} product={product} key={product._id} />)}
        </div>
    );
};

export default ManageProduct;
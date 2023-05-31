import React from 'react';
import { Link } from "react-router-dom";
import { useQuery } from 'react-query';
import ManageProductCard from '../ManageProductCard/ManageProductCard';
import Spinner from '../Spinner/Spinner';
import './ManageProduct.css';
import { toast } from 'react-hot-toast';
import HelmetComponent from '../HelmetComponent/HelmetComponent';

const ManageProduct = () => {
    const {
        isLoading,
        error,
        data,
    } = useQuery("allProduct", () =>
        fetch("http://localhost:5000/allProducts").then((res) => res.json())
    );
    if (isLoading) {
        return <Spinner />;
    }

    const deleteProduct = (id) => {
        const confirmationToDelete = window.confirm("Are you sure to delete?");
        if (confirmationToDelete) {
            fetch(`http://localhost:5000/allproduct/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Deleted successfully')
                    }
                })
        }
    }

    return (
        <div className='manage-product'>
            <HelmetComponent pageName={"alinar - manage product"} />
            <Link to='/addProduct' className='place-order-btn'>+ Add New Product</Link>
            {data?.map(product => <ManageProductCard deleteProduct={deleteProduct} product={product} key={product._id} />)}
        </div>
    );
};

export default ManageProduct;
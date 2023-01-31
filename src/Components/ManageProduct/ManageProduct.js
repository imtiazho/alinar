import React from 'react';
import { Link } from "react-router-dom";
import { useQuery } from 'react-query';
import ManageProductCard from '../ManageProductCard/ManageProductCard';
import Spinner from '../Spinner/Spinner';
import './ManageProduct.css';

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
        console.log('Delete Targeted Product', id)
    }

    return (
        <div className='manage-product'>
            <Link to='/addProduct' className='place-order-btn'>+ Add New Product</Link>
            {data?.map(product => <ManageProductCard deleteProduct={deleteProduct} product={product} key={product._id} />)}
        </div>
    );
};

export default ManageProduct;
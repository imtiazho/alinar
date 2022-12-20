import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import './NewArraivals.css'

const NewArraivals = () => {
    return (
        <div className='new-arrivals'>
            <h2 className='sention-title'> <p>Alinar</p> NEW ARRIVAL</h2>
            <div className='new-arrivals-container'>
                <div className="items-short-nav">
                    <CustomLink to='/'>SHAREE</CustomLink>
                    <CustomLink to='/abaya'>Abaya</CustomLink>
                    <CustomLink to='/3pis'>Three Pis</CustomLink>
                </div>

                <Outlet />


                <Link to='/cart' className='btn checkout-btn'>Checkout Your Items</Link>
            </div>
        </div>
    );
};

export default NewArraivals;
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-main'>
            <div className='banner-container'>
                <p>WINTER / SHAREE COLLECTION 2023</p>
                <h1>Get up to 30% off <br/>New Arrivals</h1>
                <Link className='btn' to='/shop'>Shop Now</Link>
            </div>
        </div>
    );
};

export default Banner;
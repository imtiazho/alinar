import React from 'react';
import { Link } from 'react-router-dom';
import './shareeCard.css'

const ShareeCard = ({ sharee }) => {
    const { _id, name, img, priceSet, priceJustSharee } = sharee;
    
    return (
        <Link to={`/shareeDetails/${_id}`} className='sharee-card'>
            <img src={img} alt="" />

            <div className='sharee-short-info'>
                <h3>{name}</h3>
                <p>Price: {priceSet} BDT</p>
                <p>Only Sharee Price: {priceJustSharee} BDT <span className='red-span'>*</span></p>
            </div>

            <button className='btn'>Add to Cart  <i className="fa-solid fa-cart-shopping"></i></button>
        </Link>
    );
};

export default ShareeCard;
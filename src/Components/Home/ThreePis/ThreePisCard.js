import React from 'react';
import { Link } from 'react-router-dom';
import './ThreePisCard.css'

const ThreePisCard = ({ threePis }) => {
    const { _id, name, img, priceSet } = threePis;
    return (
        <Link to={`/threePisDetails/${_id}`} className='threePis-card'>
            <img src={img} alt="" />

            <div className='threePis-short-info'>
                <h3>{name}</h3>
                <p>Price: {priceSet} BDT</p>
            </div>

            <button className='btn'>Add to Cart  <i className="fa-solid fa-cart-shopping"></i></button>
        </Link>
    );
};

export default ThreePisCard;
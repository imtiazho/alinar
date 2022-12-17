import React from 'react';
import { Link } from 'react-router-dom';
import './AbayaCard.css'

const AbayaCard = ({ abaya }) => {
    const { _id, name, img, priceSet } = abaya;

    return (
        <Link to={`/abayaDetails/${_id}`} className='abaya-card'>
            <img src={img} alt="" />

            <div className='abaya-short-info'>
                <h3>{name}</h3>
                <p>Price: {priceSet} BDT</p>
            </div>

            <button className='btn'>Add to Cart  <i className="fa-solid fa-cart-shopping"></i></button>
        </Link>
    );
};

export default AbayaCard;
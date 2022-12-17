import React from 'react';
import './BestSellingProductCard.css'

const BestSellingProductCard = ({ bestSellingProduct }) => {
    const { name, ratings, img } = bestSellingProduct;
    return (
        <div className='bestSellingProduct-card'>
            <img src={img} alt="" />

            <div className='bestSellingProduct-short-info'>
                <h3>{name}</h3>
                <p>Ratings: {ratings} starts</p>
            </div>
        </div>
    );
};

export default BestSellingProductCard;
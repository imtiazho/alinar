import React from 'react';
import { useQuery } from 'react-query';
import './BestSellingProduct.css';
import BestSellingProductCard from './BestSellingProductCard';

const BestSellingProduct = () => {
    const { isLoading, error, data: bestSellingProducts } = useQuery('bestSellingProduct', () =>
        fetch('http://localhost:5000/bestSellingProduct').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div className='best-selling-product'>
            <h2 className='sention-title'> <p>Alinar</p> BEST SELLING PRODUCT</h2>
            <div className='best-selling-product-container'>
                {
                    bestSellingProducts.map(bestSellingProduct => <BestSellingProductCard bestSellingProduct={bestSellingProduct} key={bestSellingProduct._id}></BestSellingProductCard>)
                }
            </div>
        </div>
    );
};

export default BestSellingProduct;
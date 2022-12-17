import React, { useEffect, useState } from 'react';
import ShareeCard from './ShareeCard';
import './Sharee.css'
import { useQuery } from 'react-query';

const Sharee = () => {
    const { isLoading, error, data: sharees } = useQuery('shareeData', () =>
        fetch('http://localhost:5000/sharees').then(res =>
            res.json()
        )
    )
    if(isLoading){
        return <p>Loading...</p>
    }
    return (
        <div className='sharee-section'>
            {
                sharees.map(sharee => <ShareeCard key={sharee._id} sharee={sharee}></ShareeCard>)
            }
        </div>
    );
};

export default Sharee;
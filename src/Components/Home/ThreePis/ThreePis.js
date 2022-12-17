import React from 'react';
import { useQuery } from 'react-query';
import './ThreePis.css'
import ThreePisCard from './ThreePisCard';

const ThreePis = () => {
    const { isLoading, error, data: threePises } = useQuery('threePisData', () =>
        fetch('http://localhost:5000/threePis').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div className='threePis-section'>
            {
                threePises.map(threePis => <ThreePisCard threePis={threePis} key={threePis._id}></ThreePisCard>)
            }
        </div>
    );
};

export default ThreePis;
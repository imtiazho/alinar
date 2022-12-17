import React from 'react';
import { useQuery } from 'react-query';
import AbayaCard from './AbayaCard';
import './Abaya.css'

const Abaya = () => {
    const { isLoading, error, data: abayas } = useQuery('abayaData', () =>
        fetch('http://localhost:5000/abayas').then(res =>
            res.json()
        )
    )

    if(isLoading){
        return <p>Loading...</p>
    }
    
    return (
        <div className='abaya-section'>
            {
                abayas.map(abaya => <AbayaCard key={abaya._id} abaya={abaya}></AbayaCard>)
            }
        </div>
    );
};

export default Abaya;
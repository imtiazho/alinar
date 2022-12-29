import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import './Spinner.css'

const Spinner = () => {
    return (
        <div className='spinner'>
            <ThreeCircles
                height="100"
                width="100"
                color="#EEBF0E"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    );
};

export default Spinner;
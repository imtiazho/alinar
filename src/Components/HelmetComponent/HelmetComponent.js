import React from 'react';
import { Helmet } from 'react-helmet-async';

const HelmetComponent = ({ pageName }) => {
    return (
        <div>
            <Helmet>
                <title>{pageName}</title>
            </Helmet>
        </div>
    );
};

export default HelmetComponent;
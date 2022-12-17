import React, { useEffect, useState } from 'react';

const useProducts = (jsonFile) => {
    const [products, steProducts] = useState([])

    useEffect(() => {
        fetch(jsonFile)
            .then(res => res.json())
            .then(data => steProducts(data))
    }, [jsonFile])

    return {products};
};

export default useProducts;
import React from 'react';
import './ManageProductCard.css';

const ManageProductCard = ({ product }) => {
    const {
        _id,
        handCodedId,
        name,
        priceSet,
        stock,
        img,
        ratings,
        deliveryInDhaka,
        deliveryOutDhaka,
        shortDesc,
        typeOfProduct,
        body,
        Long,
        colorGurrenty,
        quantity,
        priceJustSharee,
        shareeLong,
        productMaterial,
        panjabiSize,
        note,
        pantMaterial,
        brand,
        dupattaMaterial,
        category,
    } = product
    return (
        <div className='manage-product-card'>
            <img src={img} alt="" />
            <p>{name}</p>
            <button className='btn'>Delete</button>
        </div>
    );
};

export default ManageProductCard;
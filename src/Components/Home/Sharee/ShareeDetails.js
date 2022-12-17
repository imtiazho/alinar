import React from 'react';
import './ShareeDetails.css'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

const ShareeDetails = () => {
    const { shareeId } = useParams()
    const { isLoading, error, data: sharee } = useQuery('sharee', () =>
        fetch(`http://localhost:5000/sharee/${shareeId}`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <p>Loading...</p>
    }
    const { _id, name, priceSet, priceJustSharee, ratings, img, deliveryInDhaka, deliveryOutDhaka, typeOfProduct, productMaterial, shareeLong, panjabiSize, colorGurrenty, note } = sharee;
    return (
        <div className='sharee-details'>
            <div className='first-row'>
                <div className='image'>
                    <img src={img} alt="" />
                </div>

                <div className='pd-info-cart'>
                    <div className='product-info'>
                        <h2>{name}</h2>
                        <h4>Type of product : {typeOfProduct}</h4>
                        <p>Product Material : {productMaterial}</p>
                        <p>Price : {priceSet} BDT</p>
                        <p>Price only sharee : {priceJustSharee} BDT <span>*</span></p>
                    </div>

                    <div className='cart-btn'>
                        <button className='btn'>Add to Cart  <i className="fa-solid fa-cart-shopping"></i></button>
                        {/* <p> <span>*</span>প্রোডাক্টের কোয়ান্টিটি বাড়াতে আবার ক্লিক করুন</p> */}
                    </div>
                </div>
            </div>

            <div className='second-row'>
                <div className='short-nav-product-details'>
                    <h2 className='sub-title-product-details'>Details Infomation of {name}</h2>

                    <div className='more-info'>
                        {typeOfProduct && <h4>Type of product : {typeOfProduct}</h4>}
                        {productMaterial && <p>Product Material : {productMaterial}</p>}
                        {priceSet && <p>Price : {priceSet} BDT</p>}
                        {priceJustSharee && <p>Price only sharee : {priceJustSharee} BDT <span className='red-span'>*</span></p>}
                        {shareeLong && <p>Share Long : {shareeLong}</p>}
                        {colorGurrenty && <p>Colour Guarantee : {colorGurrenty}</p>}
                        {panjabiSize && <p>Panjabi Size : {panjabiSize}</p>}
                        {ratings && <p>Ratings : {ratings} stars</p>}
                        {deliveryInDhaka && <p>Delivery Charge : {deliveryInDhaka} BDT <span className='sub-text'><span className='red-span'>*</span> Inside Dhaka</span></p>}
                        {deliveryOutDhaka && <p>Delivery Charge : {deliveryOutDhaka} BDT <span className='sub-text'><span className='red-span'>*</span>Outside Dhaka</span></p>}
                        {note && <p>Note: {note}<span className='red-span'>*</span></p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareeDetails;
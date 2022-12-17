import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import './ThreePisDetails.css'

const ThreePisDetails = () => {
    const { threePisDetailsId } = useParams()
    const { isLoading, error, data: threePis } = useQuery('threePis', () =>
        fetch(`http://localhost:5000/threePis/${threePisDetailsId}`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <p>Loading...</p>
    }
    const { _id, name, priceSet, ratings, img, deliveryInDhaka, deliveryOutDhaka, typeOfProduct, productMaterial, pantMaterial, dupattaMaterial, brand, category, colorGurrenty } = threePis;

    return (
        <div className='threePis-details'>
            <div className='first-row'>
                <div className='image'>
                    <img src={img} alt="" />
                </div>

                <div className='pd-info-cart'>
                    <div className='product-info'>
                        <h2>{name}</h2>
                        <h4>Type of product : {typeOfProduct}</h4>
                        <p>Product Material : {productMaterial}</p>
                        <p>Pant Material : {pantMaterial}</p>
                        <p>Dupatta Material : {dupattaMaterial}</p>
                        <p>Price : {priceSet} BDT</p>
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
                        {pantMaterial && <p>Pant Material : {pantMaterial}</p>}
                        {pantMaterial && <p>Dupatta Material : {dupattaMaterial}</p>}
                        {brand && <p>Brand : {brand}</p>}
                        {category && <p>Category : {category}</p>}
                        {priceSet && <p>Price : {priceSet} BDT</p>}
                        {colorGurrenty && <p>Colour Guarantee : {colorGurrenty}</p>}
                        {ratings && <p>Ratings : {ratings} stars</p>}
                        {deliveryInDhaka && <p>Delivery Charge : {deliveryInDhaka} BDT <span className='sub-text'><span className='red-span'>*</span> Inside Dhaka</span></p>}
                        {deliveryOutDhaka && <p>Delivery Charge : {deliveryOutDhaka} BDT <span className='sub-text'><span className='red-span'>*</span>Outside Dhaka</span></p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreePisDetails;
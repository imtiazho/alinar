import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import './AbayaCardDetails.css'

const AbayaCardDetails = () => {
    const { abayaDetailsId } = useParams()

    const { isLoading, error, data: abaya } = useQuery('abaya', () =>
        fetch(`http://localhost:5000/abaya/${abayaDetailsId}`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <p>Loading...</p>
    }
    const { _id, name, priceSet, ratings, img, deliveryInDhaka, deliveryOutDhaka, typeOfProduct, shortDesc, Long, body, colorGurrenty } = abaya;

    return (
        <div className='abaya-details'>
            <div className='first-row'>
                <div className='image'>
                    <img src={img} alt="" />
                </div>

                <div className='pd-info-cart'>
                    <div className='product-info'>
                        <h2>{name}</h2>
                        <h4>Type of product : {typeOfProduct}</h4>
                        <p>Short Details : {shortDesc}</p>
                        <p>Body : {body}</p>
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
                        {shortDesc && <p>Short Details : {shortDesc}</p>}
                        {body && <p>Body : {body}</p>}
                        {Long && <p>Body : {Long}</p>}
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

export default AbayaCardDetails;
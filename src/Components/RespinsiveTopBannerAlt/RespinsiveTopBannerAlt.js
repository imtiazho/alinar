import React from 'react';
import './RespinsiveTopBannerAlt.css';
import { Link } from 'react-router-dom';

const RespinsiveTopBannerAlt = () => {
    return (
        <div>
            <div className="content">
                <div className="each-content-box">
                    <h5>SHAREE</h5>
                    <p>We have some unique SHAREE collection</p>
                    <Link className='about-btn' to='/shop'>Find Sharee</Link>
                </div>

                <div className="each-content-box">
                    <h5>ABAYA</h5>
                    <p>We provide ABAYA as per your idea</p>
                    <Link className='about-btn' to='/shop'>Find Abaya</Link>
                </div>

                <div className="each-content-box">
                    <h5>THREE PIS</h5>
                    <p>Here you will find exclusive three-piece collection at low budget</p>
                    <Link className='about-btn' to='/shop'>Three Pis</Link>
                </div>
            </div>
        </div >
    );
};

export default RespinsiveTopBannerAlt;
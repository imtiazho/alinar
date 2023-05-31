import React from 'react';
import './RespinsiveTopBannerAlt.css';

const RespinsiveTopBannerAlt = () => {
    return (
        <div>
            <div className="content">
                <div className="each-content-box">
                    <h5>SHAREE</h5>
                    <p>We have some unique SHAREE collection</p>
                    <button><a href="#">Find Sharee</a></button>
                </div>

                <div className="each-content-box">
                    <h5>ABAYA</h5>
                    <p>We provide ABAYA as per your idea</p>
                    <button><a href="#">Find Abaya</a></button>
                </div>

                <div className="each-content-box">
                    <h5>THREE PIS</h5>
                    <p>Here you will find exclusive three-piece collection at low budget</p>
                    <button><a href="#">Post Three Pis</a></button>
                </div>
            </div>
        </div >
    );
};

export default RespinsiveTopBannerAlt;
import React from 'react';
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import cli from '../../../assets/cl-1.jpeg'

const Testimonials = () => {
    return (
        <div className='testimonial'>
            <h2 className='sention-title'> <p>Alinar</p>Testimonials</h2>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                className='swiper-wrapper-cus'
            >
                <SwiperSlide className='slide'>
                    <div className="head">
                        <div className="profile">
                            <div className="clientImage">
                                <img src={cli} />
                            </div>

                            <div className="info">
                                <h4>Muhammad Rukon</h4>
                                <cite>Dhaka, Bangladesh.</cite>
                            </div>
                        </div>

                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>

                    <p>Fast response, incredible service and good behavior. Work is up to the mark. Can communicate properly for better comprehension. Very much recommended.</p>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <div className="head">
                        <div className="profile">
                            <div className="clientImage">
                                <img src={cli} />
                            </div>

                            <div className="info">
                                <h4>Muhammad Rukon</h4>
                                <cite>Dhaka, Bangladesh.</cite>
                            </div>
                        </div>

                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>

                    <p>Fast response, incredible service and good behavior. Work is up to the mark. Can communicate properly for better comprehension. Very much recommended.</p>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <div className="head">
                        <div className="profile">
                            <div className="clientImage">
                                <img src={cli} />
                            </div>

                            <div className="info">
                                <h4>Muhammad Rukon</h4>
                                <cite>Dhaka, Bangladesh.</cite>
                            </div>
                        </div>

                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>

                    <p>Fast response, incredible service and good behavior. Work is up to the mark. Can communicate properly for better comprehension. Very much recommended.</p>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <div className="head">
                        <div className="profile">
                            <div className="clientImage">
                                <img src={cli} />
                            </div>

                            <div className="info">
                                <h4>Muhammad Rukon</h4>
                                <cite>Dhaka, Bangladesh.</cite>
                            </div>
                        </div>

                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>

                    <p>Fast response, incredible service and good behavior. Work is up to the mark. Can communicate properly for better comprehension. Very much recommended.</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonials;
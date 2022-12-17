import React from 'react';
import Banner from '../Banner/Banner';
import BestSellingProduct from '../BestSellingProduct/BestSellingProduct';
import Depertment from '../Depertment/Depertment';
import LatestBlog from '../LatestBlog/LatestBlog';
import NewArraivals from '../NewArraivals/NewArraivals';
import QuestionAns from '../QuestionAns/QuestionAns';
import ServiceSummary from '../ServiceSummary/ServiceSummary';
import Testimonials from '../Testimonials/Testimonials';

const HomeMain = () => {
    return (
        <div className='home-main'>
            <Banner />
            <Depertment />
            <NewArraivals />
            <BestSellingProduct />
            <ServiceSummary />
            <LatestBlog />
            <Testimonials />
            <QuestionAns />
        </div>
    );
};

export default HomeMain;
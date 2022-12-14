import React from 'react';
import Banner from '../Banner/Banner';
import BestSellingProduct from '../BestSellingProduct/BestSellingProduct';
import Depertment from '../Depertment/Depertment';
import Footer from '../Footer/Footer';
import LatestBlog from '../LatestBlog/LatestBlog';
import NavBar from '../Navbar/NavBar';
import NewArraivals from '../NewArraivals/NewArraivals';
import ServiceSummary from '../ServiceSummary/ServiceSummary';
import Testimonials from '../Testimonials/Testimonials';

const HomeMain = () => {
    return (
        <div className='home-main'>
            <NavBar />
            <Banner />
            <Depertment />
            <NewArraivals />
            <BestSellingProduct />
            <ServiceSummary />
            <LatestBlog />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default HomeMain;
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import BestSellingProduct from '../BestSellingProduct/BestSellingProduct';
import Depertment from '../Depertment/Depertment';
import LatestBlog from '../LatestBlog/LatestBlog';
import NewArraivals from '../NewArraivals/NewArraivals';
import QuestionAns from '../QuestionAns/QuestionAns';
import ServiceSummary from '../ServiceSummary/ServiceSummary';
import Testimonials from '../Testimonials/Testimonials';
import HelmetComponent from '../../HelmetComponent/HelmetComponent';
import RespinsiveTopBannerAlt from '../../RespinsiveTopBannerAlt/RespinsiveTopBannerAlt';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import useAdmin from '../../../Hooks/useAdmin';
import { useQuery } from 'react-query';
import Spinner from '../../Spinner/Spinner';
import MainBlog from '../../MainBlog/MainBlog';

const HomeMain = () => {
    const [user, loading, error] = useAuthState(auth);

    // Here fetching best selling product
    const { isLoading: bsLoading, error: bsError, data: bsData } = useQuery("bestSellingProduct", () =>
        fetch("http://localhost:5000/allProducts").then((res) => res.json())
    );

    // Here fetching blogs data
    const { blogsDatas } = MainBlog();

    // step 1: make an empty array
    const bestSellingPro = [];

    // Step 2: Sort the array
    bsData?.sort((a, b) => b.delivered - a.delivered);

    // Step 3: Extract the top 3 numbers
    const top3Produtcs = bsData?.slice(0, 3).map(obj => bestSellingPro.push(obj));

    if (loading || bsLoading) {
        return <Spinner />
    }

    else {
        return (
            <div className='home-main'>
                <HelmetComponent pageName={"alinar - home"} />
                <Banner />
                <RespinsiveTopBannerAlt />
                <Depertment />
                <NewArraivals />
                <BestSellingProduct bestSellingPro={bestSellingPro} />
                <ServiceSummary />
                <LatestBlog blogsDatas={blogsDatas} />
                <Testimonials />
                <QuestionAns />
            </div>
        );
    }
};

export default HomeMain;
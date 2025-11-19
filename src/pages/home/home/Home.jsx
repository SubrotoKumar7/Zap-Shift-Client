import React from 'react';
import Banner from '../banner/Banner';
import Work from '../work/Work';
import Services from '../services/Services';
import Brands from '../brands/Brands';
import Feature from '../feature/Feature';
import Reviews from '../reviews/Reviews';


const reviewsPromise = fetch('/reviews.json').then(res=> res.json());


const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <Work></Work>
            <Services></Services>
            <Brands></Brands>
            <Feature></Feature>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;
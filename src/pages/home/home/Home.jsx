import React from 'react';
import Banner from '../banner/Banner';
import Work from '../work/Work';
import Services from '../services/Services';
import Brands from '../brands/Brands';
import Feature from '../feature/Feature';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <Work></Work>
            <Services></Services>
            <Brands></Brands>
            <Feature></Feature>
        </div>
    );
};

export default Home;
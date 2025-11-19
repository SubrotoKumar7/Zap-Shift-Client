import React from 'react';
import Banner from '../banner/Banner';
import Work from '../work/Work';
import Services from '../services/Services';
import Brands from '../brands/Brands';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Work></Work>
            <Services></Services>
            <Brands></Brands>
        </div>
    );
};

export default Home;
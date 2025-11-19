import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import amazon from '../../../assets/brands/amazon.png';
import amazon_vector from '../../../assets/brands/amazon_vector.png';
import casio from '../../../assets/brands/casio.png';
import moonstar from '../../../assets/brands/moonstar.png';
import randstad from '../../../assets/brands/randstad.png';
import star from '../../../assets/brands/star.png';
import start_people from '../../../assets/brands/start_people.png';


const brands = [amazon, casio, moonstar, amazon_vector, randstad, star, start_people];

const Brands = () => {
    return (
        <div className='p-25'>
            <h1 className='font-extrabold text-[28px] text-secondary text-center mb-10'>We've helped thousands of sales teams</h1>
            <div>
                <Swiper modules={[Autoplay]} autoplay={{delay: 1500}} loop={true} slidesPerView={4}>
                    {
                        brands.map((logo, i) => <SwiperSlide key={i}><img src={logo} alt="brand logo" /></SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Brands;
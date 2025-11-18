import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../../../assets/banner/banner1.png';
import bannerImg2 from '../../../assets/banner/banner2.png';
import bannerImg3 from '../../../assets/banner/banner3.png';


const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false} showThumbs={false} >
            <div className='relative'>
                <img src={bannerImg1} />
                <div className='relative left-10 bottom-30'>
                    <div className='flex items-center gap-5'>
                        <button className='btn btn-primary text-black font-bold'>Track Your Parcel</button>
                        <button className='btn btn-outline font-bold'>Be a Rider</button>
                    </div>
                    <p className='text-left py-2'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
            <div>
                <img src={bannerImg2} />
                <div className='relative left-10 bottom-30'>
                    <div className='flex items-center gap-5'>
                        <button className='btn btn-primary text-black font-bold'>Track Your Parcel</button>
                        <button className='btn btn-outline font-bold'>Be a Rider</button>
                    </div>
                    <p className='text-left py-2'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
            <div>
                <img src={bannerImg3} />
                <div className='relative left-10 bottom-30'>
                    <div className='flex items-center gap-5'>
                        <button className='btn btn-primary text-black font-bold'>Track Your Parcel</button>
                        <button className='btn btn-outline font-bold'>Be a Rider</button>
                    </div>
                    <p className='text-left py-2'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;
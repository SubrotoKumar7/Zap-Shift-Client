import React, { use } from 'react';
import headingImg from '../../../assets/customer-top.png'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';


const Reviews = ({reviewsPromise}) => {
    const reviews = use(reviewsPromise);
    return (
        <div>
            <div className='text-center flex items-center justify-center flex-col mb-20'>
                <img className='mb-10' src={headingImg} alt="heading image" />
                <h1 className='text-[40px] font-extrabold text-secondary mb-6'>What our customers are sayings</h1>
                <p>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>
            </div>
            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 2000
                    }}
                    coverflowEffect={{
                    rotate: 0,
                    stretch: '50%',
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        reviews.map((review)=> 
                            <SwiperSlide key={review.id}>
                                <ReviewCard review={review}></ReviewCard>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;
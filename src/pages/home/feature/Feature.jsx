import React from 'react';
import trackingImg from '../../../assets/live-tracking.png'
import deleveryManImg from '../../../assets/safe-delivery.png'; 

const features = [
    {
        id: 1,
        image: trackingImg,
        title: "Live Parcel Tracking",
        subtitle: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind."
    },
    {
        id: 2,
        image: deleveryManImg,
        title: "100% Safe Delivery",
        subtitle: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time."
    },
    {
        id: 3,
        image: deleveryManImg,
        title: "24/7 Call Center Support",
        subtitle: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us."
    }
]

const Feature = () => {
    return (
        <div className='m-20'>
            {
                features.map(feature => 
                    <div key={feature.id} className='flex items-center gap-5 p-5 bg-white my-6 rounded-xl'>
                        <img className='border-dashed border-r-2 border-secondary pr-7' src={feature.image} alt="feature image" />
                        <div>
                            <h1 className='font-extrabold text-2xl text-secondary mb-4'>{feature.title}</h1>
                            <p className='font-medium'>{feature.subtitle}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Feature;
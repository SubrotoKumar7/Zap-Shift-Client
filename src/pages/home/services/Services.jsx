import React from 'react';
import serviceIcon from '../../../assets/service.png'

const servicesCard = [
    {
        id: 1,
        icon: serviceIcon,
        title: "Express  & Standard Delivery",
        subtitle: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
    },
    {
        id: 2,
        icon: serviceIcon,
        title: "Nationwide Delivery",
        subtitle: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours."
    },
    {
        id: 3,
        icon: serviceIcon,
        title: "Fulfillment Solution",
        subtitle: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
    },
    {
        id: 4,
        icon: serviceIcon,
        title: "Cash on Home Delivery",
        subtitle: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
    },
    {
        id: 5,
        icon: serviceIcon,
        title: "Corporate Service / Contract In Logistics",
        subtitle: "Customized corporate services which includes warehouse and inventory management support."
    },
    {
        id: 6,
        icon: serviceIcon,
        title: "Parcel Return",
        subtitle: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
    }
]

const Services = () => {
    return (
        <div className='p-25 bg-secondary'>
            <div className='text-center mb-8 text-white'>
                <h1 className='font-extrabold text-[40px]'>Our Services</h1>
                <p className='font-medium'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    servicesCard.map(card => <div key={card.id} className='p-6 flex items-center justify-center flex-col text-center bg-white hover:bg-primary duration-500 rounded-2xl md:min-h-[300px]'>
                        <img className='mb-4' src={card.icon} alt="services icon" />
                        <h1 className='font-bold text-2xl text-secondary'>{card.title}</h1>
                        <p>{card.subtitle}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;
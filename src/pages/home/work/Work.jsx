import React from 'react';
import { FaTruck } from 'react-icons/fa';

const works = [
    {
        id: 1,
        icon: <FaTruck size={40} />,
        title: "Booking Pick & Drop",
        subtitle: "From personal packages to business shipments — we deliver on time, every time."
    },
    {
        id: 2,
        icon: <FaTruck size={40} />,
        title: "Cash On Delivery",
        subtitle: "From personal packages to business shipments — we deliver on time, every time."
    },
    {
        id: 3,
        icon: <FaTruck size={40} />,
        title: "Delivery Hub",
        subtitle: "From personal packages to business shipments — we deliver on time, every time."
    },
    {
        id: 4,
        icon: <FaTruck size={40} />,
        title: "Booking SME & Corporate",
        subtitle: "From personal packages to business shipments — we deliver on time, every time."
    }
]

const Work = () => {
    return (
        <div className='my-25'>
            <h1 className='text-[32px] font-extrabold text-secondary'>How it Works</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    works.map(work=> <div className='p-8 text-center shadow-2xl border border-base-200 rounded mt-8' key={work.id}>
                        <div className='flex items-center justify-center p-6'>{work.icon}</div>
                        <h1 className='font-bold text-xl text-secondary'>{work.title}</h1>
                        <p className='font-medium'>{work.subtitle}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Work;
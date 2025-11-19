import React from 'react';
import { ImQuotesRight } from 'react-icons/im';

const ReviewCard = ({review}) => {
    const {userName, review : testimonial, user_photoURL, user_email } = review;
    return (
        <div className='bg-white p-5 rounded-xl'>
            <ImQuotesRight className='text-secondary' size={30} />
            <p className='py-2 mb-6'>{testimonial}</p>
            <p className='border-dashed border-secondary border my-2'></p>
            <div className='flex items-center'>
                <img className='w-15 h-15 rounded-full m-5' src={user_photoURL} alt="user photo" />
                <div>
                    <h1 className='text-lg font-extrabold text-secondary'>{userName}</h1>
                    <p className='font-medium mt-2'>{user_email}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
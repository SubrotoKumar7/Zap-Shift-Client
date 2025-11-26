import React from 'react';
import Lottie from 'lottie-react';
import error from '../../assets/animations/error.json'
import { Link } from 'react-router';

const Forbidden = () => {
    return (
        <div className='grid place-items-center min-h-[80vh]'>
            <div className='text-center'>
                <Lottie className='w-[300px] h-[300px] mx-auto' animationData={error} loop={true}></Lottie>
                <h1 className='text-3xl font-bold mb-5'>Forbidden Access</h1>
                <div className='space-x-3'>
                    <Link className='btn btn-primary text-black font-bold' to={'/'}>Go Home</Link>
                    <Link className='btn btn-secondary font-bold' to={'/dashboard'}>Go Dashboard</Link>
                </div>
            </div>
        </div>
    );
};

export default Forbidden;
import React from 'react';
import errorPage from '../../assets/notFound.png';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className='w-11/12 mx-auto bg-neutral-content my-7 rounded-xl'>
            <div className='flex items-center justify-center flex-col p-20'>
                <img src={errorPage} alt="error page image" />
                <h1 className='font-extrabold text-5xl mb-7'>Error 404</h1>
                <Link className='btn btn-primary text-secondary' to={'/'}>Go Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
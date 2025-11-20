import React from 'react';
import Logo from '../components/logo/Logo';
import authImg from '../assets/authImage.png';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

const AuthLayout = () => {
    return (
        <div className='bg-base-200'>
            <div className='w-11/12 mx-auto'>
                <div className='min-h-[10vh] flex items-center'>
                    <Logo></Logo>
                </div>
                <div className='flex md:flex-row flex-col gap-5 md:gap-20 min-h-[90vh] items-center justify-center'>
                    <div className='flex-1 order-2 md:order-1 p-10'>
                        <Outlet></Outlet>
                    </div>
                    <div className='flex-1 order-1 md:order-2'>
                        <img className='w-full' src={authImg} alt="auth images" />
                    </div>
                </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default AuthLayout;
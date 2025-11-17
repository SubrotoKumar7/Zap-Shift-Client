import React from 'react';
import logo from '../../assets/logo.png';

const Logo = () => {
    return (
        <div className='flex items-end'>
            <img src={logo} alt="logo" />
            <h1 className="text-3xl -ms-2 font-bold">ZapShift</h1>
        </div>
    );
};

export default Logo;
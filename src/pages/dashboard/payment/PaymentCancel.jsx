import React from 'react';
import { Link } from 'react-router';

const PaymentCancel = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-3xl font-bold text-secondary'>Payment Cancel</h1>
            <Link to='/dashboard/my-parcels' className='btn btn-primary mt-5 text-black'>Try Again</Link>
        </div>
    );
};

export default PaymentCancel;
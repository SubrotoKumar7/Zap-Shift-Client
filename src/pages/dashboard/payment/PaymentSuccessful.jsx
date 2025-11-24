import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentSuccessful = () => {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const [paymentInfo, setPaymentInfo] = useState({});
    const axiosSecure = useAxiosSecure();

    useEffect(()=> {
        if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
            .then(res => {
                setPaymentInfo({
                    trackingId: res.data.trackingId,
                    transactionId: res.data.transactionId
                });
            })
        }
    }, [sessionId, axiosSecure])


    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-3xl font-bold text-secondary mb-5'>Payment Successful</h1>
            <p className='text-2xl font-bold'>Your transaction id is: <span className='italic font-medium'>{paymentInfo.transactionId}</span></p>
            <p className='text-2xl font-bold'>Your transaction id is: <span className='italic font-medium'>{paymentInfo.trackingId}</span></p>
        </div>
    );
};

export default PaymentSuccessful;
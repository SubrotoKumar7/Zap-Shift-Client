import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loader from '../../../components/loader/Loader';

const Payment = () => {
    const { parcelId } = useParams();
    const axiosSecure = useAxiosSecure();
    const {data: parcel, isLoading} = useQuery({
        queryKey: ['parcel', parcelId],
        queryFn: async()=> {
            const result = await axiosSecure.get(`/parcels/${parcelId}`);
            return result.data;
        }
    });

    if(isLoading){
        return <Loader></Loader>;
    }

    const handlePayment = async() => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelName: parcel.parcelName,
            parcelId: parcel._id,
            senderEmail: parcel.senderEmail
        }
        const res = await axiosSecure.post(`/create-checkout-session`, paymentInfo);
        window.location.href = res.data.url;
    }

    return (
        <div>
            <h1 className='text-3xl font-extrabold'>Please pay for! <span className='text-secondary'>{parcel.parcelName}</span></h1>
            <button onClick={handlePayment} className='btn btn-primary text-black my-5'>Pay</button>
        </div>
    );
};

export default Payment;
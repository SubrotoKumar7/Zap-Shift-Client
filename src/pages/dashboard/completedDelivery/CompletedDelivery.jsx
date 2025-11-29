import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const CompletedDelivery = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: parcels = []} = useQuery({
        queryKey: ['parcels', user?.email, 'driver assign'],
        queryFn: async()=> {
            const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user?.email}&deliveryStatus=parcel delivered`);
            return res.data;
        }
    })

    const calculatedPayout = parcel => {
        if(parcel.senderDistrict === parcel.receiverDistrict){
            return parcel.cost * 0.8;
        }
        return parcel.cost * 0.6;
    }

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-2xl text-secondary font-extrabold mb-2'>Completed Delivery {parcels.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Parcel Name</th>
                                <th>Parcel Weight</th>
                                <th>Pickup District</th>
                                <th>Destination District</th>
                                <th>Cost</th>
                                <th>Payout</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                parcels.map((parcel, index)=> 
                                <tr key={parcel._id}>
                                    <td>{index + 1}</td>
                                    <td>{parcel.parcelName}</td>
                                    <td>{parcel.parcelWeight}</td>
                                    <td>{parcel.senderDistrict}</td>
                                    <td>{parcel.receiverDistrict}</td>
                                    <td>{parcel.cost}</td>
                                    <td>{calculatedPayout(parcel)}</td>
                                    <td>
                                        <button className="btn btn-xs btn-primary text-black">Withdraw</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CompletedDelivery;
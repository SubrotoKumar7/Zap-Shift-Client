import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AssignedParcels = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: parcels = []} = useQuery({
        queryKey: ['parcels', user?.email, 'driver assign'],
        queryFn: async()=> {
            const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user?.email}&deliveryStatus=driver assign`);
            return res.data;
        }
    })

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-2xl text-secondary font-extrabold mb-2'>Pending Parcels {parcels.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Parcel Name</th>
                                <th>Parcel Weight</th>
                                <th>Destination District</th>
                                <th>Sender Phone</th>
                                <th>Receiver Phone</th>
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
                                    <td>{parcel.receiverDistrict}</td>
                                    <td>{parcel.senderPhone}</td>
                                    <td>{parcel.receiverPhone}</td>
                                    <td className='space-x-1'>
                                        <button className='btn btn-xs btn-primary text-black'>Accept</button>
                                        <button className='btn btn-xs btn-warning text-black'>Reject</button>
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

export default AssignedParcels;
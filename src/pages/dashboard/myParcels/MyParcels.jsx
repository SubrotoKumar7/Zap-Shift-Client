import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyParcels = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data : parcels = []} = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
            return res.data;
        }
    })
    return (
        <div>
            <h1 className='text-2xl font-extrabold pb-5'>My All Parcels ({parcels.length})</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>SL.</th>
                                <th>Name</th>
                                <th>Parcel Type</th>
                                <th>Cost</th>
                                <th>Payment Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            parcels.map((parcel, i) =>
                            <tr key={parcel._id}>
                                <th>{i + 1}</th>
                                <td>{parcel.parcelName}</td>
                                <td>{parcel.parcelType}</td>
                                <td>{parcel.cost}</td>
                                <td></td>
                                <td></td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyParcels;
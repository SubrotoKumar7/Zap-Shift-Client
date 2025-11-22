import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FiEdit } from "react-icons/fi";
import { FaMagnifyingGlass, FaRegTrashCan } from "react-icons/fa6";
import Swal from 'sweetalert2';

const MyParcels = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data : parcels = [], refetch} = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
            return res.data;
        }
    })

    const handleParcelDelete = id => {
        Swal.fire({
        title: "Are you sure?",
        text: "You want to delete parcel request!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
        }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/parcels/${id}`)
            .then(res=> {
                if(res.data.deletedCount){
                    // ui update 
                    refetch();

                    Swal.fire({
                    title: "Deleted!",
                    text: "Your parcel request has been deleted.",
                    icon: "success"
                    });
                }    
            });

        }
        });
    }

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
                                <td>
                                    <button className='btn btn-sm btn-square hover:bg-primary'>
                                        <FiEdit />
                                    </button>
                                    <button className='btn btn-sm btn-square hover:bg-primary mx-1'>
                                        <FaMagnifyingGlass />
                                    </button>
                                    <button onClick={()=> handleParcelDelete(parcel._id)} className='btn btn-sm btn-square hover:bg-primary'>
                                        <FaRegTrashCan />
                                    </button>
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

export default MyParcels;
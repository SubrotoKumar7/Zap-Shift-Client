import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaRegTrashAlt, FaUserCheck } from 'react-icons/fa';
import { IoPersonRemoveSharp } from "react-icons/io5";
import Swal from 'sweetalert2';


const ApproveRider = () => {
    const axiosSecure = useAxiosSecure();
    const {data: riders = [], refetch } = useQuery({
        queryKey: ["riders", "pending"],
        queryFn: async() => {
            const res = await axiosSecure.get('/riders');
            return res.data;
        }
    })

    const updateRiderStatus = (rider, status) => {
        const update = {status: status, riderEmail: rider.riderEmail};
        axiosSecure.patch(`/riders/${rider._id}`, update)
        .then(res=> {
            if(res.data.modifiedCount){
                refetch();
                Swal.fire({
                position: "top",
                icon: "success",
                title: `Rider status is set to ${status}`,
                showConfirmButton: false,
                timer: 1500
                });
            }
        })
    }

    const handleApproval = rider => {
        updateRiderStatus(rider, "approved");
    }

    const handleRejection = rider => {
        updateRiderStatus(rider, "rejected")
    }
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-3xl font-bold text-secondary'>Approve Riders {riders.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Region</th>
                                <th>District</th>
                                <th>Applied Warehouse</th>
                                <th>Application Status</th>
                                <th>Work Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            riders.map((rider, i)=> 
                                <tr key={rider._id}>
                                    <th>{i+1}</th>
                                    <td>{rider.riderName}</td>
                                    <td>{rider.riderAge}</td>
                                    <td>{rider.riderEmail}</td>
                                    <td>{rider.region}</td>
                                    <td>{rider.district}</td>
                                    <td>{rider.warehouse}</td>
                                    <td>{rider.status}</td>
                                    <td>{rider.workStatus}</td>
                                    <td>
                                        <button onClick={()=> handleApproval(rider)} title='accept' className="btn btn-xs bg-primary text-black"><FaUserCheck /></button>
                                        <button onClick={()=> handleRejection(rider)} title='reject' className="btn btn-xs mx-1 bg-secondary text-white"><IoPersonRemoveSharp /></button>
                                        <button title='delete' className="btn btn-xs bg-red-500 text-white"><FaRegTrashAlt /></button>
                                    </td>
                                </tr>
                            )  
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ApproveRider;
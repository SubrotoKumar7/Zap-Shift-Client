import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AssignRiders = () => {
    const axiosSecure = useAxiosSecure();
    const [selectedParcel, setSelectedParcel] = useState([]);
    const modalRef = useRef();
    const {data: parcels = [], refetch: parcelsRefetch} = useQuery({
        queryKey: ['parcels', 'pending'],
        queryFn: async()=> {
            const res = await axiosSecure.get('/parcels?deliveryStatus=pending');
            return res.data;
        }
    })

    const {data: riders = []} = useQuery({
        queryKey: ['riders', selectedParcel.senderDistrict, 'available'],
        enabled: !!selectedParcel,
        queryFn: async()=> {
            const res = await axiosSecure.get(`/riders?status=approved&warehouse=${selectedParcel.senderDistrict}&workStatus=available`);
            return res.data;
        }
    })

    const handleAssignRider = parcel => {
        setSelectedParcel(parcel);
        modalRef.current.showModal();
    }

    const handleRider = rider => {
        const riderInfo = {
            riderId: rider._id,
            riderName: rider.riderName,
            riderEmail: rider.riderEmail,
            parcelId: selectedParcel._id
        }
        axiosSecure.patch(`/parcels/${selectedParcel._id}`, riderInfo)
        .then(res=> {
            if(res.data.modifiedCount){
                modalRef.current.close();
                parcelsRefetch();
                Swal.fire({
                position: "top",
                icon: "success",
                title: `Rider has been assigned`,
                showConfirmButton: false,
                timer: 1500
                });
            }    
        })

    }


    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-2xl text-secondary font-extrabold mb-2'>Assign Riders</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Name</th>
                                <th>Cost</th>
                                <th>Created At</th>
                                <th>Tracking ID</th>
                                <th>Pickup District</th>
                                <th>Destination District</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                parcels.map((parcel, i)=> <tr key={parcel._id}>
                                <th>{i + 1}</th>
                                <td>{parcel.parcelName}</td>
                                <td>{parcel.cost}</td>
                                <td>{parcel.createdAt}</td>
                                <td>{parcel.trackingId}</td>
                                <td>{parcel.senderDistrict}</td>
                                <td>{parcel.receiverDistrict}</td>
                                <td>
                                    <button onClick={()=> handleAssignRider(parcel)} className="btn btn-xs btn-primary text-black">Find Rider</button>
                                </td>
                            </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Available Riders {riders.length}</h3>
                    {
                        riders.length ?
                        <table className="table table-zebra">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Rider Name</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    riders.map((rider, i)=> <tr key={rider._id}>
                                    <th>{i + 1}</th>
                                    <td>{rider.riderName}</td>
                                    <td>{rider.riderEmail}</td>
                                    <td>
                                        <button onClick={()=> handleRider(rider)} className="btn btn-xs btn-primary text-black">Assign</button>
                                    </td>
                                </tr>)
                                }
                            </tbody>
                        </table>
                        :
                        <h1 className='text-2xl font-semibold text-secondary my-2'>No Riders Available</h1>
                    }
                    <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AssignRiders;
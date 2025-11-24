import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: payments = []} = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async()=> {
            const res = await  axiosSecure.get(`payments?email=${user?.email}`)
            return res.data;
        }
    })

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-2xl text-secondary font-extrabold mb-2'>Payment History {payments.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Parcel Name</th>
                                <th>Transaction ID</th>
                                <th>Amount</th>
                                <th>Tracking Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((payment, index) => 
                                <tr key={payment._id}>
                                    <th>{index + 1}</th>
                                    <td>{payment.parcelName}</td>
                                    <td>{payment.transactionId}</td>
                                    <td>{payment.amount}</td>
                                    <td>{payment.trackingId}</td>
                                    <td>
                                        <button className='btn btn-xs'>View</button>
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

export default PaymentHistory;
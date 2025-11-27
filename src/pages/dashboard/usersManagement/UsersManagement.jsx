import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaUserShield } from "react-icons/fa";
import { FiShieldOff } from "react-icons/fi";
import Swal from 'sweetalert2';



const UsersManagement = () => {
    const [search, setSearch] = useState("");
    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch} = useQuery({
        queryKey: ["users", search],
        queryFn: async ()=> {
            const res = await axiosSecure.get(`/users?search=${search}`);
            return res.data;
        }
    })

    const handleRole = (user, roleInfo) => {
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
        .then(res=> {
            refetch();
            if(res.data.modifiedCount){
            Swal.fire({
            position: "top",
            icon: "success",
            title: `${user.displayName} ${roleInfo.role === 'admin' ? 'marked as an Admin' : 'marked as a normal User'}`,
            showConfirmButton: false,
            timer: 1500
            });
            }
        })
    }

    const handleMakeAdmin = (user)=> {
        const roleInfo = {role: 'admin'}
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make him admin",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
            }).then((result) => {
            if (result.isConfirmed) {
                handleRole(user, roleInfo);
            }
        });
    }

    const handleRemoveAdmin = (user)=> {
        const roleInfo = {role: 'user'}
        Swal.fire({
        title: "Are you sure?",
        text: "You want to remove him from admin role",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
        }).then((result) => {
        if (result.isConfirmed) {
            handleRole(user, roleInfo);
        }
        });
    }

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-3xl font-bold text-secondary'>Users {users.length}</h1>
            <div className='pb-20'>
                <div className='py-5'>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                            >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input onChange={(e)=> setSearch(e.target.value)} type="search" required placeholder="Search Users" />
                    </label>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin Actions</th>
                            <th>Others Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            users.map((user, index)=> 
                                <tr key={user._id}>
                                    <td>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                src={user.photoURL}
                                                referrerPolicy="no-referrer"
                                                alt="user image" />
                                            </div>
                                            </div>
                                            <div>
                                            <div className="font-bold">{user.displayName}</div>
                                            <div className="text-sm opacity-50 capitalize">{user.role}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td className='capitalize'>{user.role}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ?
                                            <button onClick={()=> handleRemoveAdmin(user)} title='Remove Admin' className="btn btn-xs bg-red-500 text-white"><FiShieldOff /></button>
                                            :
                                            <button onClick={()=> handleMakeAdmin(user)} title='Make Admin' className="btn btn-xs bg-green-600 text-white"><FaUserShield /></button>
                                        }
                                    </td>
                                    <td>
                                        <button className="btn btn-xs">details</button>
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

export default UsersManagement;
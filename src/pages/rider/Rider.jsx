import React from 'react';
import riderImg from '../../assets/agent-pending.png';
import { useForm, useWatch } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const Rider = () => {
    const axiosSecure = useAxiosSecure();
    const {register, handleSubmit, control } = useForm();
    const warehouseData = useLoaderData();
    const {user} = useAuth();

    const regionDuplicate = warehouseData.map(r => r.region);
    const allRegion = [...new Set(regionDuplicate)];
    const districtsDuplicate = warehouseData.map(d => d.district);
    const allDistricts = [... new Set(districtsDuplicate)];

    const districtByRegion = region => {
        const regionDistricts = warehouseData.filter(d => d.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    }

    const region = useWatch({control, name: 'region'});
        

    const handleRider = (data) => {
        axiosSecure.post('/riders', data)
        .then(res=> {
            if(res.data.insertedId){
                Swal.fire({
                position: "top",
                icon: "success",
                title: "Your application is submitted. Please wait for our confirmation.",
                showConfirmButton: false,
                timer: 1500
                });
            }
        })
    }

    return (
        <div className='w-11/12 mx-auto mb-10'>
            <div className='bg-white p-10 rounded-xl'>
                <div className='mb-13'>
                    <h1 className='text-4xl font-extrabold text-secondary'>Be a Rider</h1>
                    <p className='font-medium'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='flex flex-col md:flex-row gap-5'>
                    <div className='flex-1 order-2 md:order-1'>
                        <h2 className='font-extrabold text-[28px]'>Tell us about yourself</h2>
                        <form onSubmit={handleSubmit(handleRider)}>
                            <div className='flex flex-col md:flex-row gap-2 py-2'>
                                <div>
                                    <label className="label font-medium">Your Name</label>
                                    <input type="text" {...register('riderName', {required: true})} defaultValue={user?.displayName} className="input w-full" placeholder="Name" />
                                </div>
                                <div>
                                    <label className="label font-medium">Your Age</label>
                                    <input type="number" {...register('riderAge', {required: true})} className="input w-full" placeholder="Age" />
                                </div>
                            </div>

                            <div>
                                <label className="label font-medium">Your Email</label>
                                <input type="email" {...register('riderEmail', {required: true})} readOnly defaultValue={user?.email} className="input w-full" placeholder="Email Address" />
                            </div>
                            

                            <div className='flex flex-col md:flex-row gap-2 py-2'>
                                <div className='flex-1'>
                                    <label className="label font-semibold">Region</label>
                                    <select {...register("region", {required: true})} defaultValue="Pick a region" className="select w-full">
                                        <option disabled={true}>Pick a region</option>
                                        {
                                            allRegion.map((r,i) => <option key={i} value={r}>{r}</option>)
                                        }
                                    </select>
                                </div>
                                <div className='flex-1'>
                                    <label className="label font-semibold">District</label>
                                    <select {...register("district", {required: true})} defaultValue="Pick a district" className="select w-full">
                                        <option disabled={true}>Pick a district</option>
                                        {
                                            districtByRegion(region).map((r,i) => <option key={i} value={r}>{r}</option>)
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row gap-2 py-2'>
                                <div>
                                    <label className="label font-medium">NID No</label>
                                    <input type="number" {...register('riderNID', {required: true})} className="input w-full" placeholder="NID Card Number" />
                                </div>
                                <div>
                                    <label className="label font-medium">Contact</label>
                                    <input type="number" {...register('riderPhone', {required: true})} className="input w-full" placeholder="Contact Number" />
                                </div>
                            </div>

                            <div>
                                    <label className="label font-semibold">Which wire-house you want to work?</label>
                                    <select {...register("warehouse", {required: true})} defaultValue="Select warehouse" className="select w-full">
                                        <option disabled={true}>Select warehouse</option>
                                        {
                                            allDistricts.map((r,i) => <option key={i} value={r}>{r}</option>)
                                        }
                                    </select>
                                </div>
                            <button className="btn btn-primary text-black font-bold mt-5">Submit</button>
                        </form>
                    </div>
                    <div className='flex-1 order-1 md:order-2'>
                        <img src={riderImg} alt="rider image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rider;
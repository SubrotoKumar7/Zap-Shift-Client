import React from 'react';
import riderImg from '../../assets/agent-pending.png';

const Rider = () => {


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
                        <form>
                            <div className='flex flex-col md:flex-row gap-2 py-2'>
                                <div>
                                    <label className="label font-medium">Your Name</label>
                                    <input type="text" className="input w-full" placeholder="Name" />
                                </div>
                                <div>
                                    <label className="label font-medium">Your Age</label>
                                    <input type="number" className="input w-full" placeholder="Age" />
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row gap-2 py-2'>
                                <div>
                                    <label className="label font-medium">Your Email</label>
                                    <input type="email" className="input w-full" placeholder="Email Address" />
                                </div>
                                <div>
                                    <label className="label font-medium">Your District</label>
                                    <input type="number" className="input w-full" placeholder="District Name" />
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row gap-2 py-2'>
                                <div>
                                    <label className="label font-medium">NID No</label>
                                    <input type="number" className="input w-full" placeholder="NID Card Number" />
                                </div>
                                <div>
                                    <label className="label font-medium">Contact</label>
                                    <input type="number" className="input w-full" placeholder="Contact" />
                                </div>
                            </div>

                            <div>
                                <label className="label font-medium">Which wire-house you want to work?</label>
                                <input type="number" className="input w-full" placeholder="Warehouse Location" />
                            </div>
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
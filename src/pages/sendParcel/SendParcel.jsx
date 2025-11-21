import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';

const SendParcel = () => {

    const axiosSecure = useAxiosSecure();
    const {register, handleSubmit, control } = useForm();
    const warehouseData = useLoaderData();
    const {user} = useAuth();
    
    const regionDuplicate = warehouseData.map(r => r.region);
    const region = [...new Set(regionDuplicate)];

    const districtByRegion = region => {
        const regionDistricts = warehouseData.filter(d => d.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    }

    const senderRegion = useWatch({control, name: 'senderRegion'});
    const receiverRegion = useWatch({control, name: 'receiverRegion'})
    


    const handleParcel = (data) => {
        // console.log('after submitting data', data);
        const isDocument = data.parcelType === 'document';
        const isSameDistrict = data.senderDistrict === data.receiverDistrict;
        const parcelWeight = parseFloat(data.parcelWeight);
        let cost = 0;

        if(isDocument){
            cost = isSameDistrict ? 60 : 80;
        }
        else{
            if(parcelWeight <= 3){
                cost = isSameDistrict ? 110 : 150;
            }
            else{
                const minCharge = isSameDistrict ? 110 : 150;
                const extraWeight = parcelWeight - 3;
                const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40; 
                cost = minCharge + extraCharge;
            }
        }

        // added cost data to object
        data.cost = cost;
        
        Swal.fire({
        title: "Agree with the cost?",
        text: `You have to pay ${cost} taka`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
        }).then((result) => {
        if (result.isConfirmed) {
            // save parcel info to database
            axiosSecure.post('/parcels', data)
            .then(res=> {
                console.log('after save parcel', res.data);
                Swal.fire({
                title: "Your Parcel Accept",
                text: "We collect your parcel very soon.",
                icon: "success"
                });
            })

            
        }
        });

    }


    return (
        <div className='w-11/12 mx-auto bg-white p-10 mb-10 rounded-2xl'>
            <h1 className='text-4xl text-secondary font-extrabold'>Send A Parcel</h1>
            <div className='mt-[50px]'>
                <h2 className='text-2xl font-semibold text-secondary mb-5'>Enter your parcel details</h2>
                <div>
                    <form onSubmit={handleSubmit(handleParcel)}>
                        <div className='flex gap-5'>
                            <label className="label">
                                <input type="radio" value={'document'} {...register('parcelType')} className="radio radio-secondary radio-sm" defaultChecked />
                                Document
                            </label>
                            <label className="label">
                                <input type="radio" value={'non-document'} {...register('parcelType')} className="radio radio-secondary radio-sm" />
                                Not-Document
                            </label>
                        </div>
                        <div className='flex gap-5 mt-5'>
                            <div className='flex-1'>
                                <label className="label font-semibold">Parcel Name</label>
                                <input type="text" {...register("parcelName", {required: true})} className="input w-full" placeholder="Parcel Name" />
                            </div>
                            <div className='flex-1'>
                                <label className="label font-semibold">Parcel Weight (KG)</label>
                                <input type="number" {...register("parcelWeight", {required: true})} className="input w-full" placeholder="Parcel Weight (KG)" />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
                            {/* sender details */}
                            <div>
                                <h1 className='font-extrabold my-2'>Sender Details</h1>
                                <fieldset className="fieldset">
                                    <label className="label font-semibold">Sender Name</label>
                                    <input type="text" {...register("senderName", {required: true})} defaultValue={user?.displayName} className="input w-full" placeholder="Sender Name" />

                                    <label className="label font-semibold">Sender Email</label>
                                    <input type="email" {...register("senderEmail", {required: true})} defaultValue={user?.email} className="input w-full" placeholder="Sender Email" />

                                    <label className="label font-semibold">Sender Address</label>
                                    <input type="text" {...register("senderAddress", {required: true})} className="input w-full" placeholder="Sender Address" />

                                    <label className="label font-semibold">Sender Phone No</label>
                                    <input type="number" {...register("senderPhone", {required: true})} className="input w-full" placeholder="Sender Phone No" />

                                    <label className="label font-semibold">Sender Region</label>
                                    <select {...register("senderRegion", {required: true})} defaultValue="Pick a region" className="select w-full">
                                        <option disabled={true}>Pick a region</option>
                                        {
                                            region.map((r,i) => <option key={i} value={r}>{r}</option>)
                                        }
                                    </select>

                                    <label className="label font-semibold">Sender District</label>
                                    <select {...register("senderDistrict", {required: true})} defaultValue="Pick a district" className="select w-full">
                                        <option disabled={true}>Pick a district</option>
                                        {
                                            districtByRegion(senderRegion).map((r,i) => <option key={i} value={r}>{r}</option>)
                                        }
                                    </select>


                                    <label className="label font-semibold">Pickup Instruction</label>
                                    <textarea className="textarea h-24 w-full" {...register("pickupInstruction", {required: true})} placeholder="Pickup Instruction"></textarea>
                                </fieldset>
                            </div>

                            {/* receiver details */}
                            <div>
                                <h1 className='font-extrabold my-2'>Receiver Details</h1>
                                <fieldset className="fieldset">
                                    <label className="label font-semibold">Receiver Name</label>
                                    <input type="text" {...register("receiverName", {required: true})} className="input w-full" placeholder="Receiver Name" />

                                    <label className="label font-semibold">Receiver Email</label>
                                    <input type="email" {...register("receiverEmail", {required: true})} className="input w-full" placeholder="Receiver Email" />

                                    <label className="label font-semibold">Receiver Address</label>
                                    <input type="text" {...register("receiverAddress", {required: true})} className="input w-full" placeholder="Receiver Address" />

                                    <label className="label font-semibold">Receiver Phone No</label>
                                    <input type="number" {...register("receiverPhone", {required: true})} className="input w-full" placeholder="Receiver Phone No" />

                                    <label className="label font-semibold">Receiver Region</label>
                                    <select {...register("receiverRegion", {required: true})} defaultValue="Pick a region" className="select w-full">
                                        <option disabled={true}>Pick a region</option>
                                        {
                                            region.map((r,i) => <option key={i} value={r}>{r}</option>)
                                        }
                                    </select>

                                    <label className="label font-semibold">Receiver District</label>
                                    <select {...register("receiverDistrict", {required: true})} defaultValue="Pick a district" className="select w-full">
                                        <option disabled={true}>Pick a district</option>
                                        {
                                            districtByRegion(receiverRegion).map((r,i) => <option key={i} value={r}>{r}</option>) 
                                        }
                                    </select>

                                    <label className="label font-semibold">Delivery Instruction</label>
                                    <textarea className="textarea h-24 w-full" {...register("deliveryInstruction", {required: true})} placeholder="Delivery Instruction"></textarea>
                                </fieldset>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <p className='my-5'>* PickUp Time 4pm-7pm Approx.</p>
                            <button type='submit' className='btn btn-primary font-bold text-black'>Proceed to Confirm Booking</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SendParcel;
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import SocialLogin from '../socialLogin/SocialLogin';
import axios from 'axios';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Register = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {createUser, updateUser} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const handleRegister = (data) => {
        
        const profileImg = data.image[0];

        createUser(data.email, data.password)
        .then(res => {
            if(res.user){
                // 1st store the image in form data
                const formData = new FormData();
                formData.append('image', profileImg);

                // 2nd send the photo to image host
                const imgAPIURL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

                axios.post(imgAPIURL, formData)
                .then(res=> {
                    const imageUrl = res.data.data.url;

                    // save user to db
                    const userDB = {
                        email: data.email,
                        photoURL: imageUrl,
                        displayName: data.name
                    }
                    axiosSecure.post('/users', userDB)
                    .then(res => {
                        if(res.data.insertedId){
                            console.log(res.data);
                        }
                    })
                    .catch(err=> {
                        console.log(err.message);
                    })


                    // 3rd save to photo url in object
                    const userInfo = {
                        photoURL: imageUrl,
                        displayName: data.name
                    }

                    // 4th update firebase user
                    updateUser(userInfo)
                    .then(()=> {
                        Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Your account create successful",
                        showConfirmButton: false,
                        timer: 1500
                        });
                        navigate(location.state || '/');
                    })
                    .catch(err => {
                        toast.error(err.message);
                    })
                })
                .catch(err=> {
                    toast.error(err.message);
                })

                
            }
        })
        .catch(err => {
            toast.error(err.message);
        })
    }


    return (
        <div>
            <div className='mb-5'>
                <h1 className='text-4xl font-extrabold'>Create an Account</h1>
                <h3 className='font-medium'>Register with ZapShift</h3>
            </div>
            <div>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <fieldset className="fieldset">
                    {/* name */}
                    <label className="label">Name</label>
                    <input type="text" {...register('name', {required: true})} className="input w-full" placeholder="Name" />
                    {errors.name?.type === 'required' && <p className='text-red-500'>Name is required</p>}

                    {/* photo */}
                    <label className="label">Image</label>
                    <input type="file" {...register('image', {required: true})} className="file-input w-full" placeholder="Name" />
                    {errors.image?.type === 'required' && <p className='text-red-500'>Image is required</p>}

                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email" {...register('email', {required: true})} className="input w-full" placeholder="Email" />
                    {errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>}

                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" {...register('password', {required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/ })} className="input w-full" placeholder="Password" />
                    {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
                    {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters or longer.</p>}
                    {errors.password?.type === 'pattern' && <p className='text-red-500'>At least one lowercase letter, At least one uppercase letter, At least one special character.</p>}

                    <button type='submit' className="btn btn-primary font-bold text-black mt-4">Register</button>
                    </fieldset>
                </form>
                <div className='my-2'>Already have an account? <Link state={location.state} className='text-secondary font-semibold underline' to={'/login'}>Login</Link></div>
                <p className='text-center my-2'>OR</p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;
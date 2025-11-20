import React from 'react';
import { Link } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../socialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const Login = () => {
    const {loginUser} = useAuth();
    const {register, handleSubmit, formState: {errors}} = useForm();

    const handleLogin = (data) => {
        loginUser(data.email, data.password)
        .then(res => {
            if(res.user){
                Swal.fire({
                position: "top",
                icon: "success",
                title: "Login successful",
                showConfirmButton: false,
                timer: 1500
                });
            }
        })
        .catch(err => {
            toast.error(err.message);
        })
    }

    return (
        <div>
            <div className='mb-5'>
                <h1 className='text-4xl font-extrabold'>Welcome Back</h1>
                <h3 className='font-medium'>Login with ZapShift</h3>
            </div>
            <div>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <fieldset className="fieldset">
                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email" {...register("email", {required: true})} className="input w-full" placeholder="Email" />
                    {errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>}

                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" {...register('password', {required: true, minLength: 6})} className="input w-full" placeholder="Password" />
                    {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
                    {errors.password?.type === 'minLength' && <p className='text-red-500'>Password length should be 6 characters</p>}

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-primary text-black font-bold mt-4">Login</button>
                    </fieldset>
                </form>
                <div className='my-2'>Don’t have any account? <Link className='text-secondary font-semibold underline' to={'/register'}>Register</Link></div>
                <p className='text-center my-2'>OR</p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;
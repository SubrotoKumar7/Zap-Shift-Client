import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const Register = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {createUser, loginWithGoogle} = useAuth();

    const handleRegister = (data) => {
        createUser(data.email, data.password)
        .then(res => {
            if(res.user){
                Swal.fire({
                position: "top",
                icon: "success",
                title: "Your account create successful",
                showConfirmButton: false,
                timer: 1500
                });
            }
        })
        .catch(err => {
            toast.error(err.message);
        })
    }

    const googleLogin = () => {
        loginWithGoogle()
        .then(res => {
            if(res.user){
                Swal.fire({
                position: "top",
                icon: "success",
                title: "Your account create successful",
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
                <h1 className='text-4xl font-extrabold'>Create an Account</h1>
                <h3 className='font-medium'>Register with ZapShift</h3>
            </div>
            <div>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" {...register('name', {required: true})} className="input w-full" placeholder="Name" />
                    {errors.name?.type === 'required' && <p className='text-red-500'>Name is required</p>}

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
                <div className='my-2'>Already have an account? <Link className='text-secondary font-semibold underline' to={'/login'}>Login</Link></div>
                <p className='text-center my-2'>OR</p>
                <div>
                    <button onClick={googleLogin} className="btn w-full bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
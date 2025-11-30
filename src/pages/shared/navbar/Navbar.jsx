import React from 'react';
import Logo from '../../../components/logo/Logo';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';

const Navbar = () => {
    const {user, logoutUser} = useAuth();
    
    const links = <>
        <li><NavLink to={'/'}>Services</NavLink></li>
        <li><NavLink to={'/coverage'}>Coverage</NavLink></li>
        <li><NavLink to={'/about-us'}>About Us</NavLink></li>
        <li><NavLink to={'/'}>Pricing</NavLink></li>
        <li><NavLink to={'/send-parcel'}>Send Parcel</NavLink></li>
        <li><NavLink to={'/'}>Contact</NavLink></li>
        <>
            {
                user && 
                <>
                    <li><NavLink to={'/dashboard/my-parcels'}>My Parcels</NavLink></li>
                    <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                </>
            }
        </>
    </>

    const handleLogout = () => {
        logoutUser()
        .then(() => {
            toast.success("Logout successful");
        })
        .catch(err => {
            toast.error(err.message);
        })
    }

        return (
            <nav className='bg-base-100 shadow-sm py-3 mb-5'>
                <div className="w-11/12 mx-auto navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                        </div>
                        <Logo></Logo>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        {links}
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-1">
                        {
                            user ? 
                            <button onClick={handleLogout} className="btn btn-outline">Logout</button>
                            :
                            <Link className='btn btn-outline' to={'/login'}>Login</Link>
                        }
                        <div>
                            <Link to={'/rider'} className='btn btn-primary font-bold text-black'>Be a rider</Link>
                        </div>
                    </div>
                </div>
            </nav>   
    );
};

export default Navbar;
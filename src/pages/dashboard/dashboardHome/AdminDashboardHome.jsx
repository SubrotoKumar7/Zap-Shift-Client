import React from 'react';
import useRole from '../../../hooks/useRole';
import useAuth from '../../../hooks/useAuth';
import Logo from '../../../components/logo/Logo';

const AdminDashboardHome = () => {
    const {user} = useAuth();
    const {role: {role}} = useRole();
    return (
        <div>
            <div className='pb-5 inline-block'><Logo></Logo></div>
            <h1 className='text-2xl font-bold text-secondary'>Welcome, {user?.displayName}</h1>
            <div className="badge badge-secondary">{role}</div>
            <div className='mt-10'>
                <h1 className='text-xl font-medium mb-4 text-secondary'>Welcome to Zap Shift - Your Trusted Courier Service in Bangladesh</h1>
                <p>At Zap Shift, we understand the importance of timely deliveries, secure handling, and exceptional customer service. As one of the leading courier services in Bangladesh, Zap Shift is committed to providing reliable, fast, and affordable shipping solutions for individuals and businesses alike.
                Whether you’re sending a letter, an urgent package, or bulk shipments, Zap Shift is here to ensure your parcels are delivered with the utmost care and efficiency. Our network spans across the entire country, making us a trusted partner for both local and international deliveries.</p>
            </div>
        </div>
    );
};

export default AdminDashboardHome;
import React from 'react';
import useRole from '../../../hooks/useRole';
import useAuth from '../../../hooks/useAuth';
import Logo from '../../../components/logo/Logo';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Label, Legend, Pie, PieChart, Tooltip } from 'recharts';

const AdminDashboardHome = () => {
    const {user} = useAuth();
    const {role: {role}} = useRole();
    const axiosSecure = useAxiosSecure();
    const {data: deliveryStats = []} = useQuery({
        queryKey: ["delivery-status-stat"],
        queryFn: async() => {
            const res = await axiosSecure.get('/parcels/delivery-status/stats');
            return res.data;
        }
    })

    const getPieChartData = data => {
        return data.map(item => {
            return {name: item.status, value: item.count}
        })
    }

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
            <div className='pt-5'>
                <div className="stats shadow-2xl gap-2">
                    {
                        deliveryStats.map(stat=> 
                        <div key={stat._id} className="stat">
                            <div className="stat-figure text-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-8 w-8 stroke-current"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="stat-title text-lg">{stat._id}</div>
                            <div className="stat-value">{stat.count}</div>
                            <div className="stat-desc">Jan 1st - Feb 1st</div>
                        </div>)
                    }
                </div>
            </div>
            <div className='w-full h-[400px]'>
                <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 2 }} responsive>
                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={getPieChartData(deliveryStats)}
                        cx="50%"
                        cy="100%"
                        outerRadius="120%"
                        fill="#8884d8"
                        label
                        isAnimationActive={true}
                    />
                    <Tooltip></Tooltip>
                    <Label></Label>
                    <Legend></Legend>
                </PieChart>
            </div>
        </div>
    );
};

export default AdminDashboardHome;
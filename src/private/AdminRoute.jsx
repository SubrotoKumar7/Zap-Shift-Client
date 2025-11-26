import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Loader from '../components/loader/Loader';
import Forbidden from '../components/forbidden/Forbidden';

const AdminRoute = ({children}) => {
    const {loading} = useAuth();
    const {role: {role}, roleLoading} = useRole();

    if(loading || roleLoading){
        return <Loader></Loader>
    }

    if(role !== 'admin'){
        return <Forbidden></Forbidden>
    }

    return children;
};

export default AdminRoute;
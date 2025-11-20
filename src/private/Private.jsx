import React from 'react';
import useAuth from '../hooks/useAuth';
import Loader from '../components/loader/Loader';
import { Navigate, useLocation } from 'react-router';

const Private = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    
    if(loading){
        return <Loader></Loader>;
    }

    if(!user){
        return <Navigate to={'/login'} state={location.pathname}></Navigate>
    }

    return children;
};

export default Private;
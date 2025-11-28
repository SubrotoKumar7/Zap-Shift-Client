import React from 'react';
import useRole from '../hooks/useRole';
import useAuth from '../hooks/useAuth';
import Loader from '../components/loader/Loader';
import Forbidden from '../components/forbidden/Forbidden';

const RiderRoute = ({children}) => {
    const {loading, user} = useAuth();
    const {role: {role}, roleLoading} = useRole();

    if(loading || roleLoading || !user){
        return <Loader></Loader>
    }

    if(role !== 'rider'){
        return <Forbidden></Forbidden>
    }

    return children;
};

export default RiderRoute;
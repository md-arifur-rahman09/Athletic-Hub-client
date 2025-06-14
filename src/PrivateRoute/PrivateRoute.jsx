import React, { use } from 'react';
import { AuthContext } from '../authContext/AuthContext';
import Loading from '../pages/Loading/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { loading, user } = use(AuthContext);
    const location = useLocation();


    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate state={location.pathname} to='/login'> </Navigate>
    }

    return children;


};

export default PrivateRoute;
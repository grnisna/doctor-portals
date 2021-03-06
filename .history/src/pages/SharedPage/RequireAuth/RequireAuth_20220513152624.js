import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = () => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
//state={{ from: location }} replace
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace ></Navigate>
    }
    return (
        <div>
            
        </div>
    );
};

export default RequireAuth;
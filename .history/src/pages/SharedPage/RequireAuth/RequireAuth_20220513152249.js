import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const RequireAuth = () => {
    const [user, loading, error] = useAuthState(auth);

    if(!user){
        return 
    }
    return (
        <div>
            
        </div>
    );
};

export default RequireAuth;
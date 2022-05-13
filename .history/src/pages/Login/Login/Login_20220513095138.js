import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        console.log(user);
    }
    return (
        <div className="card lg:max-w-lg bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="text-center text-2xl">Login</h2>
                <input type="email" placeholder="Email" className="input w-full max-w-xs" />
                <input type="password" placeholder="password" className="input w-full max-w-xs" />
                <div className="divider">OR</div>
                <button 
                onClick={()=>signInWithGoogle()}
                className='btn btn-primary ' 
                >Login with Google</button>
            </div>
        </div>
    );
};

export default Login;
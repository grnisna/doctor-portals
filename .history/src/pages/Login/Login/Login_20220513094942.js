import React from 'react';

const Login = () => {
    return (
        <div className="card lg:max-w-lg bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="text-center text-2xl">Login</h2>
                <input type="email" placeholder="Email" className="input w-full max-w-xs" />
                <input type="password" placeholder="password" className="input w-full max-w-xs" />
                <div className="divider">OR</div>
                <button 
                
                className='btn btn-primary ' 
                >Login with Google</button>
            </div>
        </div>
    );
};

export default Login;
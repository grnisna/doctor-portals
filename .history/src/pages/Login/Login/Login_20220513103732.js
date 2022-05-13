import React, { useEffect } from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className="card lg:max-w-lg mx-auto border shadow-lg mt-10 text-primary-content">
            <div className="card-body mx-auto">
                <h2 className="text-center text-2xl">Login</h2>
                {/* <input type="email" placeholder="Email" className="input w-full max-w-xs" />
                <input type="password" placeholder="password" className="input w-full max-w-xs" /> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("firstName", { required: true })} />
                    {errors.firstName?.type === 'required' && "First name is required"}

                    <input {...register("lastName", { required: true })} />
                    {errors.lastName && "Last name is required"}

                    <input type="submit" />
                </form>
                <div className="divider">OR</div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary '
                >Login with Google</button>
            </div>
        </div>
    );
};

export default Login;
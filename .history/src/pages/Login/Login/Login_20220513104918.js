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

                {/* ----------------- login input  -------------- */}
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>                        
                    </label>
                    <input type="email"
                    placeholder="Your Email" 
                    class="input input-bordered w-full max-w-xs"
                    {...register("email", { required: true })} 
                     />
                    <label class="label">
                        <span class="label-text-alt">Alt label</span>                        
                    </label>

                    <label class="label">
                        <span class="label-text">Password</span>                        
                    </label>
                    <input type="password" placeholder="Your Password" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text-alt">Alt label</span>                        
                    </label>
                </div>

                {/* ---------error handleing by react hook form ---------  */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("firstName", { required: true })} />
                    {errors.firstName?.type === 'required' && "First name is required"}

                    <input {...register("lastName", { required: true })} />
                    {errors.lastName && "Last name is required"}

                    <input type="submit"  className='btn btn-primary ' value='Login' />
                </form>

                 {/* --------------divider -------------  */}
                <div className="divider">OR</div>
                {/* --------------social login -------------- */}
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary '
                >Login with Google</button>
            </div>
        </div>
    );
};

export default Login;
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
        <div className=" lg:max-w-lg mx-auto border shadow-lg mt-10 text-primary-content">

            <h2 className="text-center text-2xl">Login</h2>

            {/* ----------------- login input  -------------- */}


            {/* ---------error handleing by react hook form ---------  */}
            <form onSubmit={handleSubmit(onSubmit)} class="form-control w-full max-w-xs mx-auto">

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>

                    <input type="email"
                        placeholder="Your Email"
                        class="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Require email address'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provided valid email pattern'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.email?.type === 'required' && <span className='text-red-500' >{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='text-red-500' >{errors.email.message}</span>}

                    </label>

                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input type="password"
                        placeholder="Your Password"
                        class="input input-bordered w-full max-w-xs"
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Require password address'
                            },
                            
                            minLength: {
                                value: 6,
                                message: 'Provided valid password pattern'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.password?.type === 'required' && <span className='text-red-500' >{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className='text-red-500' >{errors.password.message}</span>}
                    </label>
                </div>
                <input type="submit" className='btn btn-primary w-full max-w-xs ' value='Login' />
            </form>
            {/* --------------divider -------------  */}
            <div className="divider">OR</div>
            {/* --------------social login -------------- */}
            <div className='w-100 mx-auto'>
                <h1 className='text-center'>someting</h1>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-full'
                >Login with Google</button>
            </div>


        </div>
    );
};

export default Login;
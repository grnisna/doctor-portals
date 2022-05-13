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


                {/* ---------error handleing by react hook form ---------  */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <input {...register("firstName", { required: true })} />
                    {errors.firstName?.type === 'required' && "First name is required"} */}

                    {/* <input {...register("lastName", { required: true })} />
                    {errors.lastName && "Last name is required"} */}


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
                                pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provided valid email pattern'
                            })}
                        />
                        <label class="label">
                            {errors.email?.type === 'required' && "Email is Required"}
                            {errors.email?.type === 'pattern' && "Provided valid email pattern"}

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
                                    message: 'Require email address'
                                },
                                minLength: 6,
                                message: 'Provided valid password pattern'
                            })}
                        />
                        <label class="label">
                            {errors.password?.type === 'required' && "Password is Required"}
                            {errors.password?.type === 'minLength' && "need 6 charecter long"}
                        </label>
                    </div>
                    <input type="submit" className='btn btn-primary w-full max-w-xs ' value='Login' />
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
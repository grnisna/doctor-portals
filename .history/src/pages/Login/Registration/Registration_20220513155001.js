import React from 'react';
import auth from '../../../firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../../SharedPage/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Registration = () => {
    const [activeUser,activeLoading]  = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const [signInWithGoogle, g_user, g_loading, g_error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if(g_user || activeUser){
        console.log(g_user,activeUser);
        navigate(from, {replace:true})
    }

    //   -------loaading------
    if (g_loading || loading) {
        return <Loading></Loading>
    };

    // -------error --------
    let signInError;
    if (g_error || error) {
        signInError = <p><span style={{ color: 'red' }} >{error?.message || g_error.message} </span></p>
    }

    const onSubmit = data => {
        console.log(data)
        createUserWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className=" lg:max-w-lg mx-auto border shadow-lg mt-10 text-primary-content py-10">

            <h2 className="text-center text-2xl">Registration</h2>

            {/* ----------------- login input  -------------- */}


            {/* ---------error handleing by react hook form ---------  */}
            <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full max-w-xs mx-auto">
              
                <div className="form-control w-full max-w-xs">

                    {/* ------------------name -------------  */}
                    <label className="label">
                        <span className="label-text">Your name</span>
                    </label>

                    <input type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Require Your Name address'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.text?.type === 'required' && <span className='text-red-500' >{errors.text.message}</span>}

                    </label>
                    {/* ------------------email -------------  */}
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>

                    <input type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
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
                    <label className="label">
                        {errors.email?.type === 'required' && <span className='text-red-500' >{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='text-red-500' >{errors.email.message}</span>}

                    </label>
                            {/* --------------password----------  */}
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password"
                        placeholder="Your Password"
                        className="input input-bordered w-full max-w-xs"
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
                    <label className="label">
                        {errors.password?.type === 'required' && <span className='text-red-500' >{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className='text-red-500' >{errors.password.message}</span>}
                    </label>
                </div>

                {signInError}
                <input type="submit" className='btn btn-primary w-full max-w-xs ' value='registraion' />
                <p><small>Already have Account to doctors portal <span className='text-primary' ><Link to='/login'> Login</Link></span></small></p>

            </form>
            {/* --------------divider -------------  */}
            <div className="divider">OR</div>
            {/* --------------social login -------------- */}

            <div className='flex items-center justify-evenly'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-outline'
                >Login with Google</button>

                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-outline'
                >Login with Github</button>

            </div>

        </div>
    );
};

export default Registration;
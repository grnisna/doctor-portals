
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../../SharedPage/Loading/Loading';

const Login = () => {
    const [signInWithGoogle, g_user, g_loading, g_error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

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
        signInWithEmailAndPassword(data.email, data.password)
    };

    return (
        <div className=" lg:max-w-lg mx-auto border shadow-lg mt-10 text-primary-content py-10">

            <h2 className="text-center text-2xl">Login</h2>

            {/* ----------------- login input  -------------- */}


            {/* ---------error handleing by react hook form ---------  */}
            <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full max-w-xs mx-auto">

                <div className="form-control w-full max-w-xs">
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
                <input type="submit" className='btn btn-primary w-full max-w-xs ' value='Login' />
            </form>
            {/* --------------divider -------------  */}
            <div className="divider">OR</div>
            {/* --------------social login -------------- */}

            <div>
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

export default Login;
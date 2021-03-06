import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../SharedPage/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const {data:services,isLoading} = useQuery('services',()=>fetch('https://shrouded-hollows-10086.herokuapp.com/service').then( res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }

    // ---------------submit button --------------
    const imgApikey = '5fbcdb5a428c028af61f3741571ad322';
    // uploadLink = https://api.imgbb.com/1/upload

    const onSubmit = async data => {
        
        const image = data.image[0];        
        const formData = new FormData();
        formData.append('image',image);

        const url = `https://api.imgbb.com/1/upload?key=${imgApikey}`;
        fetch(url,{method:'POST',body:formData})
        .then( res => res.json())
        .then( result =>{
            
            if(result.success){
                const img = result.data.url;
                const doctor = {
                    name:data.name,
                    email:data.email,
                    specialty:data.specialty,
                    img:img
                };

                fetch('https://shrouded-hollows-10086.herokuapp.com/doctor',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json',
                        authorization:`Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body:JSON.stringify(doctor)
                })
                .then( res => res.json())
                .then( inserted => {
                    if(inserted.insertedId){
                        toast.success('SuccessFullly ADDED');
                        reset();
                    }
                    else{
                        toast.error('Failed to add doctor information');
                        reset();
                    }
                })
            }
        })
    };

    return (
        <div>
            <h1>Add a New Doctor</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full  mx-auto">

                <div className="form-control w-full ">

                    {/* ------------------name -------------  */}
                    <label className="label">
                        <span className="label-text">Your name</span>
                    </label>

                    <input type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full "
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
                        className="input input-bordered w-full "
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
                        <span className="label-text">Speciality</span>
                    </label>

                    <select {...register('specialty')} className="select w-full max-w-xs">
                        
                        {
                            services.map(service => <option 
                                key={service._id}
                                value={service.name}
                                > {service.name} </option>)
                        }
                    </select>

                    {/* ------------------image upload -------------  */}
                    <label className="label">
                        <span className="label-text">Doctor Image</span>
                    </label>

                    <input type="file"
                        className="input input-bordered w-full "
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Require doctors Images'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.file?.type === 'required' && <span className='text-red-500' >{errors.file.message}</span>}

                    </label>

                </div>


                <input type="submit" className='btn btn-primary w-full ' value='ADD' />

            </form>
        </div>
    );
};

export default AddDoctor;
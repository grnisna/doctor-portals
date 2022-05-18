import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../SharedPage/Loading/Loading';

const Payment = () => {
    const { appointId } = useParams();

    const {data:appoitment,isLoading} = useQuery(['booking',appointId],()=>fetch(`http://localhost:5000/booking/${appointId}`,{
        method:'GET',
        headers:{authorization:`Bearer ${localStorage.getItem('accessToken')}`}
    }).then(res=>res.json()));

    if(isLoading){
        return <Loading></Loading>
    }
    const {treatement,patientName,date,slot} = appoitment;
    return (
        <div>
            <div className="card w-94 bg-base-100 my-10 shadow-xl">
                <div className="card-body">
                    <h1 className='text-2xl'>Treatement on <span className='text-purple-500' >{treatement}</span> </h1>
                    <h2 className="card-title">Hello, {patientName} </h2>

                    <p>Your Appointment is <span className='text-orange-700'> {treatement} </span> is on  <span className='text-orange-700'> {date} </span> at  <span className='text-orange-700'> {slot} </span> </p>
                    
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
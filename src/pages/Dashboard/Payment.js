import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {CardElement, Elements} from '@stripe/react-stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../SharedPage/Loading/Loading';
import CheckoutForm from './CheckoutForm';

// strip api key ------------------
const stripePromise = loadStripe('pk_test_51L0n2qCi5PWr8KPCurMmZmhlJEx8ZEoP5qVQyJhgP3me90UrjMQjxkIE9Y1zGMiVp80HKbadzEYD9nIiEgFBx9Cq005ObwXMol');

const Payment = () => {
    const { appointId } = useParams();

    const { data: appoitment, isLoading } = useQuery(['booking', appointId], () => fetch(`https://shrouded-hollows-10086.herokuapp.com/booking/${appointId}`, {
        method: 'GET',
        headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    const { treatement, patientName, date, slot } = appoitment;
    return (
        <div>
            <div className="card w-94 bg-base-100 my-10 shadow-xl">
                <div className="card-body">
                    <h1 className='text-2xl'>Treatement on <span className='text-purple-500' >{treatement}</span> </h1>
                    <h2 className="card-title">Hello, {patientName} </h2>

                    <p>Your Appointment is <span className='text-orange-700'> {treatement} </span> is on  <span className='text-orange-700'> {date} </span> at  <span className='text-orange-700'> {slot} </span> </p>

                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appoitment={appoitment} />
                    </Elements>
                </div>
            </div>
        </div>
        
    );
};

export default Payment;
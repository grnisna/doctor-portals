import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';


const CheckoutForm = ({appoitment}) => {
    const {price,patient,patientName,_id} = appoitment;
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [paymentIntentId, setPaymentIntentId] = useState('');
    const [processing, setProcessing] = useState(false);

    useEffect(()=>{
        fetch('https://shrouded-hollows-10086.herokuapp.com/create-payment-intent',{
            method:'POST',
            headers:{
                'content-type':'application/json',
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify({price})
        })
        .then(res => res.json())
        .then( data =>{
            
            if(data?.clientSecret){
                setClientSecret(data.clientSecret);
            }
        })
    },[price])

    const handleSubmit = async (event) => {
        https://shrouded-hollows-10086.herokuapp.com/       // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        };

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');
        setSuccess('');
        setProcessing(true);

        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email:patient
                },
              },
            },
          );

          if(intentError){
              setCardError(intentError?.message);
              setProcessing(false);
              
          }
          else{
              toast.success(`Congrates! successfully done. tnscID: ${paymentIntent.id}`)
              setSuccess(`Congrates! successfully done. tnscID: ${paymentIntent.id}`);
              setPaymentIntentId(paymentIntent.id)
              setCardError('');
            //   --------------- post data for  paid  and paid button ----------
            const payment = {
                appointment : _id,
                transactionId : paymentIntent.id

            }
            fetch(`https://shrouded-hollows-10086.herokuapp.com/booking/${_id}`,{
                method:'PATCH',
                headers:{
                    'content-type':'application/json',
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                },
                body:JSON.stringify(payment)
            })
            .then( res => res.json())
            .then( data =>{
                
                setProcessing(false);
            })
          }

    }



    return (
        <>

            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-primary mt-5 w-full' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>

            {cardError && <p className='text-error'> {cardError} </p>}
            {success && <p className='text-green-700'> {success} and transaction Id: {paymentIntentId} </p>}
        </>
    );
};

export default CheckoutForm;
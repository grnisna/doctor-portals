import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const BookingModal = ({ book, date, setBook }) => {
    const [user] = useAuthState(auth);


    const { name, slots, _id } = book;

    const handleSumbit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        // const bookingDate = format(date,'PP');
        const getDate = format(date, 'PP');

        // const handleBooking  ={
        //     bookingId : _id,
        //     bookingName : name,
        //     bookingTime : bookingDate,
        //     slot,
        //     patientName : user.displayName,
        //     patientEmail : user.email,
        //     patientAddress:event.target.address.value,
        //     patientPhone:event.target.phone.value  

        // };
        const handleBooking = {
            bookingId: _id,
            bookingName: name,
            bookDate: getDate,
            slot,
            patientName: user.displayName,
            patientEmail: user.email,
            patientAddress: event.target.address.value,
            patientPhone: event.target.phone.value
        }

        // fetch('https://shrouded-hollows-10086.herokuapp.com/booking',{
        //     method:'POST',
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body:JSON.stringify(handleBooking)
        // })
        // .then( res => res.json())
        // .then(data =>{

        //     console.log(data);
        //     if(data.success){
        //         toast(`Appointment is booked on ${bookingDate} at ${slot}`)
        //     }
        //     else{
        //         toast.error(`Already booked on ${data.booked?.bookingTime} at ${data.booked?.slot}`)
        //     }
        // })
        fetch('https://shrouded-hollows-10086.herokuapp.com/engage', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(handleBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if(data.success){
                //     toast(`Appointment is on ${getDate} at ${slot}`);
                // }else{
                //     toast.error(`Already appointed on ${data.success?.bookDate} at ${data.success?.slot}`)
                // }
                // close the modal 
                setBook(null);
            })



    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary text-center " >{name}</h3>
                    <p className="py-4 text-center">Your Appointment time:<span className='text-primary'> {format(date, 'PP')} </span> at <span className='text-primary'> {slots[1]} </span></p>
                    {/* ----------------------form--------------  */}
                    <form onSubmit={handleSumbit} className='grid grid-cols-1 gap-3 justify-items-center '>
                        <input type="text" value={name} readOnly disabled className="input input-bordered mt-4 w-full max-w-xs" />
                        <input type="text" value={`Time :${format(date, 'PP')} at ${slots[1]} `} readOnly disabled className="input input-bordered mt-4 w-full max-w-xs" />

                        {/* <label className="label text-left">
                            your name                         
                        </label> */}

                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>

                        {/* <label className="label">
                            <span className="label-text">your address</span>                            
                        </label> */}
                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered mt-4 w-full max-w-xs" />

                        {/* <label className="label">
                            <span className="label-text">your address</span>                            
                        </label> */}
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered mt-4 w-full max-w-xs" />

                        {/* <label className="label">
                            <span className="label-text">your address</span>                            
                        </label> */}
                        <input type="text" name='address' placeholder="Your address" className="input input-bordered mt-4 w-full max-w-xs" />

                        {/* <label className="label">
                            <span className="label-text">your phone number</span>                            
                        </label> */}
                        <input type="text" name='phone' placeholder="Phone number" className="input input-bordered mt-4 w-full max-w-xs" />


                        {/* --------------submit ------------- */}
                        <input type="submit" value="SUBMIT" className=" btn btn-primary mt-4 w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;
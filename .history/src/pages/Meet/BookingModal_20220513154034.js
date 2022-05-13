import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const BookingModal = ({ book, date ,setBook}) => {
    const [user] = useAuthState(auth);

    const { name, slots ,_id } = book;

    const handleSumbit = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        setBook(null);
        console.log(_id,name,slot);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
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
                            slots.map(slot => <option value={slot}>{slot}</option>)
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
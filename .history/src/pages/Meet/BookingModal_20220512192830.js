import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ book, date }) => {

    const { name, slots } = book;

    const handleSumbit = event =>{
        event.preventDefault();
        const slot = event.target.select.value;
        console.log(slot);
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
                    <form onClick={handleSumbit} className='grid grid-cols-1 gap-3 justify-items-center '>
                        <input type="text" value={name} readOnly disabled className="input input-bordered mt-4 w-full max-w-xs" />
                        <input type="text" value={`Time :${format(date, 'PP')} at ${slots[1]} `} readOnly disabled className="input input-bordered mt-4 w-full max-w-xs" />

                        {/* <label className="label text-left">
                            your name                         
                        </label> */}
                        
                        <select name='select' className="select select-bordered w-full max-w-xs">
                        {
                            slots.map(slot => <option value={slot}>{slot}</option>)
                        }
                        </select>

                        {/* <label className="label">
                            <span className="label-text">your address</span>                            
                        </label> */}
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered mt-4 w-full max-w-xs" />

                        {/* <label className="label">
                            <span className="label-text">your address</span>                            
                        </label> */}
                        <input type="email" name='email' placeholder="Your Email Address" className="input input-bordered mt-4 w-full max-w-xs" />
                        
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
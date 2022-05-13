import React from 'react';

const BookingModal = ({ book, date }) => {
    const { name, slots } = book;
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary " >{name}</h3>
                    <p className="py-4">Your Appointment time: <span className='text-primary'> {slots[1]} </span></p>
                    <form className='grid grid-cols-1 gap-3 '>
                        <input type="text" placeholder="Your Name" className="input input-bordered mt-4 w-full max-w-xs" />
                        <input type="text" placeholder="Your address" className="input input-bordered mt-4 w-full max-w-xs" />
                        <input type="text" placeholder="Phone number" className="input input-bordered mt-4 w-full max-w-xs" />
                        <input type="submit" value="SUBMIT" className=" btn btn-primary mt-4 w-full max-w-xs" />
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
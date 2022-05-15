import React from 'react';

const Service = ({ meet, setBook }) => {
    const { name, slots } = meet;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">

                <h2 className="text-2xl font-bold text-primary text-center">{name} </h2>

                <p> {slots.length > 0 ?
                    <span className='text-accent' >{slots[0]}</span>
                    :
                    <span className='text-red-600' >Not Available Today</span>}
                </p>

                <p>
                    {slots.length} {slots.length >= 1 ? 'spaces' : 'space'} spaces available
                </p>

                <div className="card-actions justify-center">

                    <label
                        htmlFor="booking-modal"
                        disabled={slots.length > 0 ? false : true}
                        onClick={() => setBook(meet)}
                        className="btn btn-primary">Appointment Now</label>
                </div>
            </div>
        </div>
    );
};

export default Service;
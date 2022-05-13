import React from 'react';

const Service = ({ meet }) => {
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
                    <button 
                    disabled={slots.length > 0 ? false : true}
                    
                    className="btn btn-primary">Appointment Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;
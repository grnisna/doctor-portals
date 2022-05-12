import React from 'react';
import clock from '../../../assets/icons/clock.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ' >
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={clock} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Here are Open at 9.00 am and close 10.00 pm</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Info;
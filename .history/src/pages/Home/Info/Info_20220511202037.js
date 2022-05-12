import React from 'react';
import clock from '../../../assets/icons/clock.svg';

const Info = () => {
    return (
        <div>
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
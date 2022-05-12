import React from 'react';
import clock from '../../../assets/icons/clock.svg';

const Info = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={clock} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Info;
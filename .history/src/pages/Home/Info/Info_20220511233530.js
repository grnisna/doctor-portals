import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-4' >
            <div className="card text-base-100 lg:card-side bg-gradient-to-r from-secondary to-primary p-5 shadow-xl">
                <figure><img src={clock} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Here are Open at 9.00 am and close 10.00 pm</p>
                    
                </div>
            </div>
            <InfoCard img={clock} ></InfoCard>
            <div className="card text-base-100 lg:card-side bg-gradient-to-r from-secondary to-primary p-5 shadow-xl">
                <figure><img src={phone} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Contact Now</h2>
                    <p> +01 0215447613</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Info;
import React from 'react';
import chair from '../../../assets/images/chair.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="hero min-h-screen background-image">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                <img src={chair} alt='chair' />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts here </h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn text-base-100 uppercase bg-gradient-to-r from-secondary to-primary hover:from-pink-500 hover:to-yellow-500 ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
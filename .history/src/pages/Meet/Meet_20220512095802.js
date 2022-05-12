import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import chair from '../../assets/images/chair.png';

const Meet = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="hero min-h-screen background-image">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                <img src={chair} alt='chair' />
                </div>
                <div>
                    <h1 className="text-6xl font-bold">Your New Smile Starts here </h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn border-0 text-base-100 uppercase bg-gradient-to-r from-warning to-primary hover:from-pink-500 hover:to-yellow-500 ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Meet;
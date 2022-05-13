import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import chair from '../../assets/images/chair.png';

const Meet = () => {
    const [data, setDate ] = useState(new Date())
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='chair' />
                <div>
                    <DayPicker/>
                </div>
            </div>
        </div>
    );
};

export default Meet;
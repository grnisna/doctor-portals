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
                    <DayPicker
                        mode:'single'
                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default Meet;
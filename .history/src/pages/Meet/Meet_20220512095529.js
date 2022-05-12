import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import chair from '../../assets/images/chair.png';

const Meet = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img className='w-48' src={chair} alt='chair' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        
                    />

                </div>
            </div>
        </div>
    );
};

export default Meet;
import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png';

const Meet = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} />
                <div>
                    <DayPicker/>
                </div>
            </div>
        </div>
    );
};

export default Meet;
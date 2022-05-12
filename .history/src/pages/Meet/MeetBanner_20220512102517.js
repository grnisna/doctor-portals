import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png';
const MeetBanner = ({date,setDate}) => {
    return (
        <div className="hero min-h-screen background-image">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                <img src={chair} alt='chair' />
                </div>
                <div className='flex-1 border '>
                    <DayPicker
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                    ></DayPicker>

                    
                </div>
            </div>
        </div>
    );
};

export default MeetBanner;
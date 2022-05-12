import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import chair from '../../assets/images/chair.png';
import MeetBanner from './MeetBanner';

const Meet = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <MeetBanner date={date} setDate={setDate} ></MeetBanner>
        </div>
    );
};

export default Meet;
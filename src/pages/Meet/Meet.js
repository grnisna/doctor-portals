
import React, { useState } from 'react';

import 'react-day-picker/dist/style.css';
import AvailableMeet from './AvailableMeet';


import MeetBanner from './MeetBanner';

const Meet = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <MeetBanner date={date} setDate={setDate} ></MeetBanner>
            <AvailableMeet date={date} ></AvailableMeet>
        </div>
    );
};

export default Meet;
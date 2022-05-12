import { format } from 'date-fns';
import React from 'react';

const AvailableMeet = ({date}) => {
    return (
        <div>
            <p className='text-center text-secondary font-bold text-3xl' >Available Appointments On: <span >  {format(date,'PP')}</span> </p>
        </div>
    );
};

export default AvailableMeet;
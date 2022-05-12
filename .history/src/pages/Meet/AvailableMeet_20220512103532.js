import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableMeet = ({date}) => {
    const [meeting,setMeeting] = useState([]);
    useEffect( ()=>{
        fetch('appoinments.json')
        .then( res => res.json())
        .then ( data => setMeeting(data));
    } ,[])
    return (
        <div>
            <p className='text-center text-secondary font-bold text-3xl' >Available Appointments On: <span >  {format(date,'PP')}</span> </p>
            <p>total metting {meeting.length}</p>
        </div>
    );
};

export default AvailableMeet;
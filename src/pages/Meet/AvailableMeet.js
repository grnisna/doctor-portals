import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableMeet = ({date}) => {
    const [meeting,setMeeting] = useState([]);
    useEffect( ()=>{
        fetch('appoinments.json')
        .then( res => res.json())
        .then ( data => setMeeting(data));
    } ,[]);

    return (
        <div className='my-20 py-10'>
            <p className='text-center text-secondary font-bold text-3xl' >Available Appointments On: <span >  {format(date,'PP')}</span> </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10' >
                {
                    meeting.map(meet=> <Service
                        key={meet._id}
                        meet={meet}
                    ></Service>)
                }
            </div>
            
        </div>
    );
};

export default AvailableMeet;
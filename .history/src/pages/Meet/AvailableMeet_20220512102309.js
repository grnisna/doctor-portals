import { format } from 'date-fns';
import React from 'react';

const AvailableMeet = ({date}) => {
    return (
        <div>
            <p>Selected date: <span style={{color:'blue',fontWeight:'bold'}} >  {format(date,'PP')}</span> </p>
        </div>
    );
};

export default AvailableMeet;
import React from 'react';
import  { useEffect, useState } from 'react';

const MyAppointment = () => {
    const [myAppoint , setMyAppoint] = useState([])
    useEffect( ()=>{
        fetch('')
        .then( res => res.json())
        .then( data =>{
            setMyAppoint(data);
        })
    },[])
    return (
        <div>
            <h1>My appointMent</h1>

        </div>
    );
};

export default MyAppointment;
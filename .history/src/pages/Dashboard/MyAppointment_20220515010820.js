import React from 'react';
import  { useEffect, useState } from 'react';

const MyAppointment = () => {
    const [myAppoint , setMyAppoint] = useState([]);
    const [user] = useAuthState(auth);
    useEffect( ()=>{
        fetch(`http://localhost:5000/booking`)
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
import React from 'react';
import  { useEffect, useState } from 'react';

const MyAppointment = () => {
    const [myAppoint , setMyAppoint] = useState([]);
    const [user] = useAuthState(auth);
    useEffect( ()=>{
        fetch(`https://shrouded-hollows-10086.herokuapp.com/booking`)
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
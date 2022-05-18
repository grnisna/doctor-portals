import React from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const MyAppointment = () => {
    const [myAppoint, setMyAppoint] = useState([]);
    const [user] = useAuthState(auth);
    const email = user.email;
    
    useEffect(() => {
        if (user) {
            const url = `https://shrouded-hollows-10086.herokuapp.com/booking?patient=${email}`;
            console.log(url);
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setMyAppoint(data);
                })
        }
    }, [user,email])
    return (
        <div>
            <h1>My appointMent {myAppoint.length} </h1>

        </div>
    );
};

export default MyAppointment;
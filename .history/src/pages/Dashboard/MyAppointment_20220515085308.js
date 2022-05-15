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
            fetch(`http://localhost:5000/booking?email=${email}`)
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
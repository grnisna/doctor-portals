import React from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const MyAppointment = () => {
    const [myAppoint, setMyAppoint] = useState([]);
    const [user] = useAuthState(auth);
    const email = user.email;
    console.log(myAppoint);

    useEffect(() => {
        if (user) {
            const url = `http://localhost:5000/booking?patient=${email}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setMyAppoint(data);
                })
        }
    }, [user, email])
    return (
        <div>
            <h1>My appointMent {myAppoint.length} </h1>

            <div className="overflow-x-auto">
                <table class="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Sl.no</th>
                            <th>Treatement Name</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>

                    {/* <!-- row 1 --> */}
                    <tbody>
                        
                            
                    </tbody>





                </table>
            </div>

        </div >
    );
};

export default MyAppointment;
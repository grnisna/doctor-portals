import React from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {useNavigate} from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyAppointment = () => {
    const navigate = useNavigate();
    const [myAppoint, setMyAppoint] = useState([]);
    const [user] = useAuthState(auth);
    const email = user.email;
    console.log(myAppoint);

    useEffect(() => {
        if (user) {
            const url = `http://localhost:5000/booking?patient=${email}`;

            fetch(url,{
                method:'GET',
                headers:{'authorization':`Bearer ${localStorage.getItem('accessToken')}`},
                

            })
                .then(res => {
                    console.log(res);
                    if(res.status === 401 || res.status === 403){
                        signOut(auth);

                        navigate('/login');
                    }
                    return res.json()})
                .then(data => {
                    setMyAppoint(data);
                })
        }
    }, [user, email,navigate])
    return (
        <div>
            <h1 className='text-xl text-green-600 text-center' >My appointMent {myAppoint.length} </h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr className='text-center'>
                            <th>Sl.no</th>
                            <th>Treatement Name</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>

                    {/* <!-- row 1 --> */}
                    <tbody>

                        {
                            myAppoint.map((appoint, index) => <tr
                                key={index}
                            >
                                <th>{index + 1} </th>
                                <td>{appoint.treatement} </td>
                                <td>{appoint.date} </td>
                                <td>{appoint.slot} </td>
                                
                            </tr>)
                        }

                    </tbody>





                </table>
            </div>

        </div >
    );
};

export default MyAppointment;
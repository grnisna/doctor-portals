import React from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {Link, useNavigate} from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyAppointment = () => {
    const navigate = useNavigate();
    const [myAppoint, setMyAppoint] = useState([]);
    const [user] = useAuthState(auth);
    const email = user.email;
    

    useEffect(() => {
        if (user) {
            const url = `https://shrouded-hollows-10086.herokuapp.com/booking?patient=${email}`;

            fetch(url,{
                method:'GET',
                headers:{'authorization':`Bearer ${localStorage.getItem('accessToken')}`},
                

            })
                .then(res => {
                    
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
                            <th>Payment</th>
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
                                <td>
                                    {(appoint.price && !appoint.paid) && <Link to={`/dashboard/payment/${appoint._id}`}> <button className='btn btn-error btn-sx' >pay now</button> </Link>} 
                                    {(appoint.price && appoint.paid) && <div>
                                        <span className='text-success' >paid</span><br />
                                        <span className='text-orange-500' >Trnasaction ID: {appoint.transactionId} </span>
                                        </div>}
                                </td>
                                
                            </tr>)
                        }

                    </tbody>





                </table>
            </div>

        </div >
    );
};

export default MyAppointment;
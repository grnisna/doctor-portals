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
    }, [user, email])
    return (
        <div>
            <h1>My appointMent {myAppoint.length} </h1>

            <div className="overflow-x-auto">
                <table class="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* <!-- row 2 --> */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* <!-- row 3 --> */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppointment;
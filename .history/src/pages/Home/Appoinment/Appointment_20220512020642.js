import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import bgAppointment from '../../../assets/images/appointment.png';
import './Appointment.css';

const Appointment = () => {
    return (
        <div style={{background:`url(${bgAppointment})`}} className="flex justify-center items-center my-20">
            <div className='flex-1'>
                <img className='lg:ml-12 mt-[-150px]' src={doctor} alt="traatement" />
            </div>

            <div className='flex-1'>
                <h2 className='text-secondary font-bold' >APPOINTMENT</h2>
                <h1 className="text-4xl text-base-100 font-bold">Make An Appointment Today </h1>

                <p className="py-6 text-base-100">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                <button className="btn border-0 text-base-100 uppercase bg-gradient-to-r from-warning to-primary hover:from-pink-500 hover:to-yellow-500 ">Get Started</button>
            </div>

        </div>


    );
};

export default Appointment;
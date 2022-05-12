import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const LiveServe = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl  my-20 p-4">
            <figure><img className='lg:ml-40' src={treatment} alt="Album" /></figure>
            <div className="card-body lg:w-10/12 lg:ml-40">
                <h2 className="card-title text-5xl">Exceptional Dental Care, on Your Terms</h2>
                <p className='m-0 p-0'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                </p>
                <div className="card-actions justify-start">
                    <button className="btn border-0 text-base-100 uppercase bg-gradient-to-r from-warning to-primary hover:from-pink-500 hover:to-yellow-500 ">GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default LiveServe;
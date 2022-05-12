import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const LiveServe = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl  my-20 p-4">
            
                   <div className="hero min-h-screen background-image">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                <img className='lg:ml-40' src={treatment} alt="traatement" />
                </div>
                <div>
                    <h1 className="text-6xl font-bold">Your New Smile Starts here </h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn border-0 text-base-100 uppercase bg-gradient-to-r from-warning to-primary hover:from-pink-500 hover:to-yellow-500 ">Get Started</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default LiveServe;
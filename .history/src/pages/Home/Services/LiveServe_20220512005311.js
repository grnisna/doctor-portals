import React from 'react';

const LiveServe = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl align-baseline my-20">
            <figure><img className='ml-40' src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-start">
                    <button className="btn border-0 text-base-100 uppercase bg-gradient-to-r from-warning to-primary hover:from-pink-500 hover:to-yellow-500 ">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default LiveServe;
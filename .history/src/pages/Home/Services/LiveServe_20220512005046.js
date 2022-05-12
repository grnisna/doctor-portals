import React from 'react';

const LiveServe = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl align-center">
            <figure><img className='ml-40' src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default LiveServe;
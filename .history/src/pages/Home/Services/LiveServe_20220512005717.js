import React from 'react';

const LiveServe = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl align-baseline my-20 p-4">
            <figure><img className='lg:ml-40' src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
            <div className="card-body lg:w-10/12 lg:ml-40">
                <h2 className="card-title text-5xl">Exceptional Dental Care, on Your Terms</h2>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                </p>
                <div className="card-actions justify-start">
                    <button className="btn border-0 text-base-100 uppercase bg-gradient-to-r from-warning to-primary hover:from-pink-500 hover:to-yellow-500 ">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default LiveServe;
import React from 'react';

const Comments = ({ comment }) => {
    const { name, img, reviews, place } = comment;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p> {reviews} </p>
                <div className="">
                    <div>
                        <h2 className="text-2xl">{name}</h2>
                        <h5 className='text-xl' > {place} </h5>
                    </div>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;
import React from 'react';

const Service = ({meet}) => {
    const {name,slots} = meet;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name} </h2>
                <p> {slots.length[1]} </p>
                <p> {slots.length} {slots.length >= 1 ? 'spaces':'space' } spaces available </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;
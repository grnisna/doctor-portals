import React from 'react';

const Service = ({meet}) => {
    const {name,slots} = meet;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{name} </h2>
                <p> {slots.length} </p>
                <p> {slots.length} {slots.length >= 1 ? 'spaces':'space' } spaces available </p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;
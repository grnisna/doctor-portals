import React from 'react';

const Comments = ({comment}) => {
    const {name,img,reviews} = comment;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p> {reviews} </p>
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    
                </div>
            </div>
        </div>
    );
};

export default Comments;
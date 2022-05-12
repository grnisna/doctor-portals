import React from 'react';

const InfoCard = ({img,title,para,bgColor}) => {
    return (
        <div className={`card lg:card-side bg-accent p-5 shadow-xl ${bgColor} `}>
            <figure><img src={img} alt="Album"/></figure>
            <div className="card-body text-base-100">
                <h2 className="card-title">{title}</h2>
                <p>{para}</p>
                
            </div>
        </div>
    );
};

export default InfoCard;
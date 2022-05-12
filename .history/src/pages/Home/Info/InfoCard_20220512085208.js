import React from 'react';

const InfoCard = ({img,title,para,bgClass}) => {
    return (
        <div className={`card lg:card-side p-5 shadow-xl bg-gradient-to-r from-secondary to-primary `}>
            <figure><img src={img} alt="Album"/></figure>
            <div className="card-body text-base-100">
                <h2 className="card-title">{title}</h2>
                <p>{para}</p>
                
            </div>
        </div>
    );
};

export default InfoCard;
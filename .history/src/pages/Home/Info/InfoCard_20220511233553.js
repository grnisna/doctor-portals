import React from 'react';
import map from '../../../assets/icons/marker.svg';

const InfoCard = ({img}) => {
    return (
        <div className="card lg:card-side bg-accent p-5 shadow-xl">
            <figure><img src={img} alt="Album"/></figure>
            <div className="card-body text-base-100">
                <h2 className="card-title">Visit Our Location</h2>
                <p>Bholail, Fatullah, Narayanganj, Bangladesh</p>
                
            </div>
        </div>
    );
};

export default InfoCard;
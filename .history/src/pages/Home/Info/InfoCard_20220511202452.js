import React from 'react';
import map from '../../../assets/icons/marker.svg';

const InfoCard = () => {
    return (
        <div className="card lg:card-side bg-accent shadow-xl">
            <figure><img src={map} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">Visit Our Location</h2>
                <p>Bholail, Fatullah, Narayanganj, Bangladesh</p>
                
            </div>
        </div>
    );
};

export default InfoCard;
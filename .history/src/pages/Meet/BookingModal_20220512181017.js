import React from 'react';

const BookingModal = ({book}) => {
    const {name,slots}= book;
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label for="booking-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
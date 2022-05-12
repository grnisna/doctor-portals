import React from 'react';
import quote  from '../../../assets/icons/quote.svg';

const Testimonial = () => {
    return (
        <section>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-secondary text-xl font-bold' >Testimonials</h4>
                    <h2 className='text-4xl'>What Our Patients Say</h2>
                </div>
                <img className='w-24 lg:w-96' src={quote} alt="" />
            </div>
            <div></div>
        </section>
    );
};

export default Testimonial;
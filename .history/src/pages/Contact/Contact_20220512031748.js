import React from 'react';
import bgimg from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section style={{background:`url(${bgimg})`}} >
            <h4 className='text-secondary text-center font-bold' >Contact Us</h4>
            <h2 className='text-base-100 text-3xl text-center font-bold'>Stay Connected With Us</h2>

            <div className='lg:max-w-48 m-auto'>

            <input type="email" placeholder="Email Address" className="input w-full max-w-xs" /> <br />
            <input type="text" placeholder="Subject" className="input w-full max-w-xs" /><br />
            <textarea className="textarea textarea-bordered" placeholder="Your Comments"></textarea><br />

            </div>
        </section>
    );
};

export default Contact;
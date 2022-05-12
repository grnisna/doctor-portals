import React from 'react';
import bgimg from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section style={{background:`url(${bgimg})`}}  className='py-20' >
            <h4 className='text-secondary text-center font-bold' >Contact Us</h4>
            <h2 className='text-base-100 text-3xl text-center font-bold'>Stay Connected With Us</h2>

            <div className='lg:max-w-48 text-center'>

            <input type="email" placeholder="Email Address" className="input w-full max-w-xs" /> <br /><br />
            <input type="text" placeholder="Subject" className="input w-full max-w-xs" /><br /><br />
            <textarea className="textarea w-full max-w-xs textarea-bordered" placeholder="Your Comments"></textarea><br /><br />
            <input type="submit" className="input text-primary"  value="Submit" />

            </div>
        </section>
    );
};

export default Contact;
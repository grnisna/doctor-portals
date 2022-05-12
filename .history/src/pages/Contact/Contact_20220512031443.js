import React from 'react';

const Contact = () => {
    return (
        <section>
            <h4 className='text-secondary text-center font-bold' >Contact Us</h4>
            <h2 className='text-base-100 text-3xl text-center font-bold'>Stay Connected With Us</h2>
            
            <div className='lg:max-w-48'>

            <input type="email" placeholder="Email Address" className="input w-full max-w-xs" />
            <input type="text" placeholder="Subject" className="input w-full max-w-xs" />
            <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>

            </div>
        </section>
    );
};

export default Contact;
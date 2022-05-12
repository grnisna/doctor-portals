import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className='bg-accent'>
            <p className='text-center' >All right reserved by Doctor Portal</p>
            <p className='text-center'>Copyright &copy; {date} </p>
        </div>
    );
};

export default Footer;
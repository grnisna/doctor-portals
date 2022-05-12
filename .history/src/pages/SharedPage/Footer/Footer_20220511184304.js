import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div>
            <p className='text-center' >All right reserved by Doctor Portal</p>
            <p>Copyright &copy; {date} </p>
        </div>
    );
};

export default Footer;
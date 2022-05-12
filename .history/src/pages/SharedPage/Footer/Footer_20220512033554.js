import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className='px-12'>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>

            {/* -----------------------  */}
            <div className='bg-accent' >
                <p className='text-center text-base-100' >All right reserved by Doctor Portal</p>
                <p className='text-center text-base-100'>Copyright &copy; {date} </p>
            </div>
        </div>
    );
};

export default Footer;
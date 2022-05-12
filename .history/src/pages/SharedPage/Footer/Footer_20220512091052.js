import React from 'react';
import { Link } from 'react-router-dom';
import footerImg from '../../../assets/images/footer.png';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div style={{
            background:`url(${footerImg})`,
            backgroundSize:'cover'
            }} className='py-10' >
            <footer className="footer p-10 text-accent  text-neutral-content">
                <div className='text-accent'>
                    <span className="footer-title">Services</span>
                    <Link to='/home' className="link link-hover text-accent">Branding</Link>
                    <Link to='/home' className="link link-hover">Design</Link>
                    <Link to='/home' className="link link-hover">Marketing</Link>
                    <Link to='/home' className="link link-hover">Advertisement</Link>
                </div>
                <div className='text-accent'>
                    <span className="footer-title">Company</span>
                    <Link to='/home' className="link link-hover">About us</Link>
                    <Link to='/home' className="link link-hover">Contact</Link>
                    <Link to='/home' className="link link-hover">Jobs</Link>
                    <Link to='/home' className="link link-hover">Press kit</Link>
                </div>
                <div className='text-accent'>
                    <span className="footer-title">Legal</span>
                    <Link to='/home' className="link link-hover">Terms of use</Link>
                    <Link to='/home' className="link link-hover">Privacy policy</Link>
                    <Link to='/home' className="link link-hover">Cookie policy</Link>
                </div>
            </footer>

            {/* -----------------------  */}
            <div className='text-accent' >
                <p className='text-center ' >All right reserved by Doctor Portal</p>
                <p className='text-center '>Copyright &copy; {date} </p>
            </div>
        </div>
    );
};

export default Footer;
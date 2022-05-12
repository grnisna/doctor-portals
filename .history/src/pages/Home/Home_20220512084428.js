import React from 'react';
import Appointment from './Appoinment/Appointment';
import Banner from './Bannner/Banner';
import ContactUs from './ContactUs/ContactUs';
import Info from './Info/Info';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;
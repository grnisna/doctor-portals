import React from 'react';
import Appointment from './Appoinment/Appointment';
import Banner from './Bannner/Banner';
import Info from './Info/Info';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
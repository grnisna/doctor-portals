import React from 'react';
import Appointment from './Appoinment/Appointment';
import Banner from './Bannner/Banner';
import Info from './Info/Info';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;
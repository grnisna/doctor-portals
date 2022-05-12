import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import map from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-4' >

            <InfoCard img={clock} title='Opening Hours' para='Here are Open at 9.00 am and close 10.00 pm' bgclassName='bg-gradient-to-r from-secondary to-primary' ></InfoCard>
            <InfoCard img={map} title='Visit Our Location' para='Bholail, Fatullah, Narayanganj, Bangladesh' bgclassName='bg-accent' ></InfoCard>
            <InfoCard img={phone} title='Contact Now' para='+01 0215447613' bgclassName='bg-gradient-to-r from-secondary to-primary' ></InfoCard>

        </div>
    );
};

export default Info;
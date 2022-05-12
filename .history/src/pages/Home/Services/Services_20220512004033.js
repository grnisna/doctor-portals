import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';
import LiveService from './liveService';

const Services = () => {
    const services = [
        {
            title: 'Fluoride Treatement',
            description: 'amar soner bangla ami tomay valobasi',
            img: fluoride,
            _id:1
        },
        {
            title: 'Cavity Filling',
            description: 'amar soner bangla ami tomay valobasi',
            img: cavity,
            _id:2
        },
        {
            title: 'Teeth Whitening',
            description: 'amar soner bangla ami tomay valobasi',
            img: whitening,
            _id:3
        }
    ]
    return (
        <div className=' my-12  ' >
            <div className='my-5' >
                <h3 className='text-center text-secondary 2xl font-bold' >OUR SERVICS</h3>
                <h2 className='text-accent text-center text-4xl ' >Services We Provide</h2>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10' >
                    {
                        services.map(service => <Service 
                            key={service._id}
                            service={service}
                            ></Service>)
                    }
            </div>

            <LiveService></LiveService>
        </div>
    );
};

export default Services;
import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

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
        <div className='  ' >
            <div className='my-10' >
                <h3 className='text-center text-secondary 2xl font-bold' >OUR SERVICS</h3>
                <h2 className='text-accent text-center text-4xl ' >Services We Provide</h2>
            </div>

            <div>
                    {
                        services.map(service => <Service 
                            key={service._id}
                            service={service}
                            ></Service>)
                    }
            </div>

        </div>
    );
};

export default Services;
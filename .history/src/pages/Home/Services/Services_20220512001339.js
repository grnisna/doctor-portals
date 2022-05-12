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
        <div className='border' >
            <div>
                <h3 className='text-secondary xl' >OUR SERVICS</h3>
                <h1 className='text-accent 2xl' >Services We Provide</h1>
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
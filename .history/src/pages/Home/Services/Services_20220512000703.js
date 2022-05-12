import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {
            title:'Fluoride Treatement',
            description:'amar soner bangla ami tomay valobasi',
            img:fluoride            
        },
        {
            title:'',
            description:'amar soner bangla ami tomay valobasi',
            img:fluoride            
        },
        {
            title:'Fluoride Treatement',
            description:'amar soner bangla ami tomay valobasi',
            img:fluoride            
        }
    ]
    return (
        <div className='border' >
            <div>
            <h3 className='text-secondary xl' >OUR SERVICS</h3>
            <h1 className='text-accent 2xl' >Services We Provide</h1>
            </div>

            <div>

            </div>
            
        </div>
    );
};

export default Services;
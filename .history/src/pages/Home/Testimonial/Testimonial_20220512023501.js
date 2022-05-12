import React from 'react';
import quote  from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';

const Testimonial = () => {
    const comments = [
        {
            comment:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name:'Crish Morish',
            place:'Calliforniya',
            _id:1,
            img:''
        },
        {
            comment:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name:'Yodev chokroborti',
            _id:2,
            place:'India'
        },
        {
            comment:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name:'Mesh Mesh',
            _id:3,
            place:'BanglaDesh'
        },
    ]
    return (
        <section>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-secondary text-xl font-bold' >Testimonials</h4>
                    <h2 className='text-4xl'>What Our Patients Say</h2>
                </div>
                <img className='w-24 lg:w-48' src={quote} alt="" />
            </div>

            <div>

            </div>
        </section>
    );
};

export default Testimonial;
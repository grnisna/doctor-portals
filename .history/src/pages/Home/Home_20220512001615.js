import React from 'react';
import Banner from './Bannner/Banner';
import Info from './Info/Info';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import ShortDes from '../ShortDes/ShortDes';
import './Home.css'
import Inventory from './Inventiry/Inventory';

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <ShortDes></ShortDes>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;
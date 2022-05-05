import React from 'react';
import Banner from '../Banner/Banner';
import ShortDes from '../ShortDes/ShortDes';
import './Home.css'
import Inventory from './Inventiry/Inventory';
// import SponcerdBrand from './SponcerdBrand/SponcerdBrand';

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <ShortDes></ShortDes>
            <Inventory></Inventory>
            {/* <SponcerdBrand></SponcerdBrand> */}
        </div>
    );
};

export default Home;
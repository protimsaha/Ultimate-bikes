import React from 'react';
import './Review.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init();

const Review = () => {
    return (
        <div data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1500" className='mt-5'>
            <div>
                <h1 className='text-center m-text'>Largest Motorbike Warehouse</h1>
                <h3 className='text-center m-text'>in your region</h3>
            </div>
            <div className='row r-card py-3'>
                <div className='col-md-3 col-sm-12 d-flex flex-column justify-content-center align-items-center'>
                    <div className='my-icon text-center text-white '>
                        <h2 className='mt-3'> 1M+</h2>
                    </div>
                    <h4 className='text-white'>Active Customers</h4>
                </div>
                <div className='col-md-3 col-sm-12  d-flex flex-column justify-content-center align-items-center'>
                    <div className='my-icon text-center text-white'>
                        <h2 className='mt-3'>30+</h2></div>
                    <h4 className='text-white'>Import company</h4>
                </div>
                <div className='col-md-3 col-sm-12  d-flex flex-column justify-content-center align-items-center'>
                    <div className='my-icon text-center text-white'>
                        <h2 className='mt-3'>5Acr</h2>
                    </div>
                    <h4 className='text-white'>Warehouse Area</h4>
                </div>
                <div className='col-md-3 col-sm-12  d-flex flex-column justify-content-center align-items-center'>
                    <div className='my-icon text-center text-white'><h2 className='mt-3'>100+</h2></div>
                    <h4 className='text-white'>Showroom</h4>
                </div>
            </div>
        </div>
    );
};

export default Review;
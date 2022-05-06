import React from 'react';
import './Footer.css'
import bikeLogo from '../Header/bike-logo.jpg'
import app from '../Footer/playstore.jpg'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='m-footer '>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='footer-logo'>
                            <img className='img-fluid my-4' src={bikeLogo} alt="" />
                        </div>
                        <p className='text-white text-center fs-4'>Download Our Official app</p>
                        <img className='img-fluid mt-4' src={app} alt="" />
                    </div>
                    <div className='col-md-4'>
                        <p className='heading w-75 mt-4 p-2'>FOLLOW US</p>
                        <p className='f-text'>FACEBOOK</p>
                        <p className='f-text'>INSTAGRAM</p>
                        <p className='f-text'>TWEETER</p>
                        <p className='f-text'>YOUTUBE</p>
                        <p className='f-text'>SNAPCHAT</p>
                    </div>
                    <div className='col-md-4'>
                        <p className='heading w-75 mt-4 p-2'>FIND US</p>
                        <p className='f-text'>DHAKA</p>
                        <p className='f-text'>KHULNA</p>
                        <p className='f-text'>RAJSHAHI</p>
                        <p className='f-text'>CHITTAGONG</p>
                        <p className='f-text'>SYLHET</p>
                    </div>
                    <p className='text-white text-center copy-text fs-5'>Copyright claimed by Ultimate Bikes © {year}</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='m-footer '>
            <div className='container'>
                <div className='row'>
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
                    <div className='col-md-4'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

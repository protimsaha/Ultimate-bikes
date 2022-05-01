import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <p>FOLLOW US</p>
                        <p><FontAwesomeIcon icon={faCoffee} /> FACEBOOK</p>
                    </div>
                    <div className='col-md-4'>
                    </div>
                    <div className='col-md-4'>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

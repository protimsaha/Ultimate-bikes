import React from 'react';
import not from '../../../image/404 img.jpeg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 not-text g-2 '>
                    <h1 className='text-center text-warning'>Oops! Your searched result is not exist!</h1>
                    <h2 className='text-center text-danger'>404</h2>
                </div>
                <div className='col-md-6 not-img g-2 ' >
                    <img className='img-fluid' src={not} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;
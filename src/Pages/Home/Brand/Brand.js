import React from 'react';
import './Brand.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Brand = ({ brand }) => {
    const { name, photo, des, price, quantity, supplierName } = brand
    return (
        <div data-aos-offset="200"
            data-aos-duration="1500" data-aos="zoom-in-up" data-aos-once="false" className=' col-md-6 col-sm-12 g-4'>
            <div className=' card my-card'>
                <img className='img-fluid  b-img w-50 mx-auto' src={photo} alt="" />
                <div className='text-white ms-3'>
                    <h3>{name}</h3>
                    <p>{des}</p>
                    <h4>{price}</h4>
                    <h5>Quantity: {quantity}</h5>
                    <h4>{supplierName}</h4>
                </div>
                <div className='mx-auto '>
                    <button className='btn  m-btn'>Update Now</button>
                </div>
            </div>
        </div>
    );
};

export default Brand;
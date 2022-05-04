import React from 'react';
import './Brand.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
AOS.init();

const Brand = ({ brand }) => {



    const navigate = useNavigate()
    const { _id, name, photo, des, price, quantity, supplierName } = brand
    return (
        <div data-aos-offset="200"
            data-aos-duration="1500" data-aos="zoom-in-up" data-aos-once="false" className=' col-md-6 col-sm-12 g-4'>
            <div className=' card my-card'>
                <div className=' b-img w-50 mx-auto'>
                    <img src={photo} alt="" />
                </div>
                <div className='text-white ms-3'>
                    <h3>{name}</h3>
                    <p>{des}</p>
                    <h4>{price}</h4>
                    <h5>Quantity: {quantity}</h5>
                    <h4>{supplierName}</h4>
                </div>
                <div className='mx-auto '>
                    <button onClick={() => (navigate(`inventory/${_id}`) && (navigate(`inventory/inventory/${_id}`)))} className='btn  m-btn'>Update Now</button>
                </div>
            </div>
        </div>
    );
};

export default Brand;
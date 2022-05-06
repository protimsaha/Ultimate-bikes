import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import useBrands from '../../Shared/useBrands/useBrands';
import Banner from '../Banner/Banner';
import ShortDes from '../ShortDes/ShortDes';
import './Home.css'

const Home = () => {
    const navigate = useNavigate()
    const [brands] = useBrands()
    const homeBrands = brands.slice(0, 6)

    return (
        <>
            <PageTitle title='Home'></PageTitle>
            <Banner></Banner>
            <ShortDes></ShortDes>
            <h2 className='i-text text-center'>Visit Our Huge Inventory!</h2>
            <div className='container row mx-auto mb-5'>
                {
                    homeBrands.map(hBrand =>
                        <div data-aos-offset="200"
                            data-aos-duration="1500" data-aos="zoom-in-up" data-aos-once="false" className=' col-md-6 col-sm-12 g-4'>
                            <div className=' card my-card'>
                                <div className=' b-img w-50 mx-auto'>
                                    <img className='img-fluid' src={hBrand.photo} alt="" />
                                </div>
                                <div className='text-white ms-3'>
                                    <h3>{hBrand.name}</h3>
                                    <p>{hBrand.des}</p>
                                    <h4>{hBrand.price}</h4>
                                    <h5>Quantity: {hBrand.quantity}</h5>
                                    <h4>{hBrand.supplierName}</h4>
                                </div>
                                <div className='mx-auto '>
                                    <button onClick={() => (navigate(`inventory/${hBrand._id}`))} className='btn  m-btn'>Update Now</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </>
    );
};

export default Home;
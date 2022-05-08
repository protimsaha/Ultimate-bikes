import React from 'react';
import './ShortDes.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Review from '../Review/Review';
AOS.init();

const ShortDes = () => {
    return (
        <div className='container'>
            <Review></Review>
            <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1500"
                data-aos-once="false"
                className=' extra my-5'>
                <div className='row'>
                    <div className=" col-md-6 col-sm-12 d-flex align-items-center justify-content-center ">
                        <div>
                            <h2 className='text-white ps-2'>THE ULTIMATE BIKES WORLD</h2>
                            <p className='text-white ps-2'>Ultimate bikes is a motorbike inventory warehouse since 2000 . We import the best brand motorbikes all around the world and distribute to other showrooms. Our customers are are pleased by working with us. We have the top latest technology to store and destribute Bikes and sphares.Dedicated team support is our passion. You are welcome to start your business from here.We will support your till our potential</p>
                        </div>
                    </div>
                    <div className="col-md-6 des-img col-sm-12">
                        <img className=' p-1' src="https://images.medialinksonline.com/2125045x800x440xFFFFFFxE.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShortDes;
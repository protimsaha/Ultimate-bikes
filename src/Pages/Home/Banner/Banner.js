import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import img1 from '../../../image/exterior-view-1-1360x1107.jpg'
import img2 from '../../../image/img2.jpg'
import img3 from '../../../image/Urban-Phoenix-Warehouse-Office.jpg'

const Banner = () => {
    return (
        <Carousel >
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>HARLEY DEVIDSON</h3>
                    <p>One of our biggest motorcycle supplier.There are more than 30 companies</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>OUR HUGE INVENTORY INTERIOR</h3>
                    <p>Our every inventory is more than 1000sq feet interior.Its safe and secured and always under CCTV</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>OUR CORPORATE OFFICE</h3>
                    <p>We have our main corporate office near our warehouse.You will find every official service in this office. This is one stop service.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
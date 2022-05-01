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
                    className="d-block w-100 b-img"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 b-img"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 b-img"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
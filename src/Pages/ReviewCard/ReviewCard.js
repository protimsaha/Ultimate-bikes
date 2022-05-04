import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ReviewCard.css'

const ReviewCard = ({ reviewCard, handleDelete }) => {
    const navigate = useNavigate()

    const { _id, photo, name, price, quantity } = reviewCard;
    return (
        <div className='container'>
            <div className="d-flex bd-highlight mb-3 review-card">
                <div className="p-2 bd-highlight review-img">
                    <img src={photo} alt="" />
                </div>
                <div className="p-2 bd-highlight d-flex flex-column justify-content-center">
                    <h5>Name:{name}</h5>
                    <p>Price:{price}</p>
                    <p>Quantity:{quantity}</p>
                </div>
                <div className="ms-auto p-2 bd-highlight d-flex flex-column justify-content-center">
                    <button onClick={() => navigate('/add-new')} className='btn btn-info'>Add New item</button>
                    <button onClick={() => handleDelete(_id)} className='btn btn-danger my-3'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
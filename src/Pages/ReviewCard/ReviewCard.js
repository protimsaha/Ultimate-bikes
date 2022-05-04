import axios from 'axios';
import React from 'react';
import './ReviewCard.css'

const ReviewCard = ({ reviewCard }) => {
    const handleDelete = id => {
        console.log(id)
        const url = `http://localhost:5000/bikes/${id}`
        axios.delete(url)
            .then(res => {
                console.log(res)
            })
    }

    const { _id, photo, name, price, quantity } = reviewCard;
    return (
        <div className='container'>
            <div className="d-flex bd-highlight mb-3 review-card">
                <div className="p-2 bd-highlight review-img">
                    <img src={photo} alt="" />
                </div>
                <div className="p-2 bd-highlight d-flex flex-column justify-content-center">
                    <h5>{name}</h5>
                    <p>{price}</p>
                    <p>{quantity}</p>
                </div>
                <div className="ms-auto p-2 bd-highlight d-flex flex-column justify-content-center">
                    <button className='btn btn-info'>Add New item</button>
                    <button onClick={() => handleDelete(_id)} className='btn btn-danger my-3'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
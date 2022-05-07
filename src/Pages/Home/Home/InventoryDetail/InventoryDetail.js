import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './InventoryDetail.css'


const InventoryDetail = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState({})

    const { name, photo, des, price, quantity, supplierName } = detail

    // Fetch data to get product detail by id
    useEffect(() => {
        const url = `http://localhost:5000/bikes/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDetail(data)
                // console.log(detail)
            })
    }, [id, quantity, detail])

    // Delivery function added
    const handleAdd = (event) => {
        event.preventDefault()
        const number = event.target.number.value;
        const newNumber = Number(number) + (quantity)
        const url = `http://localhost:5000/bikes/${id}`

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                newNumber
            }),

        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        event.target.reset()
    }

    // Import button functionality added
    const updateQuantity = () => {
        const updatedQuantity = quantity - 1
        const url = `http://localhost:5000/bikes/${id}`

        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                updatedQuantity
            }),

        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div className='my-4 container '>
            <h2 className='my-4 text-center m-text'>Update Now</h2>
            <div className='card detail-card  mx-auto'>
                <div className='d-img mx-auto text-center'>
                    <img className='w-75 img-fluid my-3' src={photo} alt="" />
                </div>
                <div className='w-75 mx-auto d-flex flex-column align-items-start'>
                    <h2>Name: <span className=' '> {name}</span></h2>
                    <h3>Price:$ <span className=' '>{price}</span> </h3>
                    <h3>Supplier name: <span className=' '>{supplierName}</span></h3>
                    <h2>Quantity : <span className=' '>{quantity}</span></h2>
                    <p>{des}</p>
                </div>
                <div className='d-flex w-100 justify-content-around align-items-center'>
                    <button className='my-5' id='inventory-u-btn' onClick={updateQuantity}>Delivered</button>

                    <form className='my-5 ms-4' onSubmit={handleAdd}>
                        <h3 className='text-warning'>Import now</h3>
                        <input type="number" className='form-input my-2' name="number" placeholder='Imported Quantity' />
                        <br />
                        <input className='btn btn-success' type="submit" value="Import" />
                    </form>
                </div>
                <div className='mx-auto my-4' >
                    <Link to='/manage-inventory ' className=' manage-inventory-btn '>Manage Inventory</Link>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetail;
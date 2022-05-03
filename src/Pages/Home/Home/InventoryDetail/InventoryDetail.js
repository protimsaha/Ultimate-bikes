import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Loading from '../../../Auth/Loading';
import './Inventory.css'

const InventoryDetail = () => {

    const { id } = useParams()
    const [detail, setDetail] = useState({})
    const { name, quantity } = detail

    useEffect(() => {
        const url = `http://localhost:5000/bikes/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [id, quantity, detail])





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
    }

    const updateQuant = () => {
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
        <div className='in-detail'>
            <h2>This is invenventory detail for :{id} </h2>
            <h2>{name}</h2>
            <h3 >{quantity}</h3>
            <button onClick={updateQuant}>Update</button>

            <form onSubmit={handleAdd}>
                <input type="number" name="number" id="" />
                <br />
                <input type="submit" value="add" />
            </form>

        </div>
    );
};

export default InventoryDetail;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../Auth/Loading';
import './Inventory.css'

const InventoryDetail = () => {

    const { id } = useParams()
    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const url = `http://localhost:5000/bikes/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
        setLoading(false)
    }, [id, loading])

    const { name, quantity } = detail

    const handleAdd = (event) => {
        // event.preventDefault()
        setLoading(true)
        const number = event.target.number.value;
        const newNumber = Number(number) + (quantity)
        // console.log(number, quantity, newNumber)

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
        setLoading(false)

    }
    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div className='in-detail'>
            <h2>This is invenventory detail for :{id} </h2>
            <h2>{name}</h2>
            <h3 >{quantity}</h3>
            <form onSubmit={handleAdd}>
                <input type="number" name="number" id="" />
                <br />
                <input type="submit" value="add" />
            </form>

        </div>
    );
};

export default InventoryDetail;
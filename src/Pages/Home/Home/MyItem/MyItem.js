import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Auth/Firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth)
    const email = user?.email;
    const [items, setItems] = useState([])

    useEffect(() => {
        const getItem = async () => {
            const url = `http://localhost:5000/items?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setItems(data)
            }
            catch (error) {
                console.log(error.message)
            }
        }

        getItem()

    }, [email, items])

    // delete methode
    const handleCancel = (id) => {
        console.log(id)
        const url = `http://localhost:5000/items/${id}`
        axios.delete(url)
            .then(res => console.log(res))
    }


    return (<div className=' container row mx-auto my-5'>
        {
            items.map(item =>
                <div key={item._id} className=' col-md-6 col-sm-12 g-4 my-5'>
                    <div className=' card'>
                        <div className='b-img w-50 mx-auto'>
                            <img src={item.photo} alt="" />
                        </div>
                        <div className='bg-info w-100 '>
                            <h3>{item.name}</h3>
                            <p>Description: {item.des}</p>
                            <h4>Price:{item.price}</h4>
                            <h5>Quantity: {item.quantity}</h5>
                            <h4>Supplier name:{item.supplierName}</h4>
                        </div>
                        <div onClick={() => handleCancel(item._id)} className='text-center '>
                            <button className=' btn btn-danger w-100'>Cancel</button>
                        </div>
                    </div>
                </div>)
        }
    </div>
    );
};

export default MyItem;
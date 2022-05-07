import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Auth/Firebase.init';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import './MyItem.css'

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
        // delete from all data
        axios.delete(`http://localhost:5000/bikes/${id}`)
            .then(res => console.log(res))
        // delete from myitem
        axios.delete(`http://localhost:5000/items/${id}`)
            .then(res => console.log(res))
    }


    return (
        <div className='my-item container row mx-auto my-5'>
            <PageTitle title='My Items'></PageTitle>
            {
                items.map(item =>
                    <div key={item._id} className=' col-md-4 col-sm-12 g-4 my-5'>
                        <div className=' card'>
                            <div className='b-img w-100 mx-auto'>
                                <img className='img-fluid w-100' src={item.photo} alt="" />
                            </div>
                            <div className='bg-info w-100 '>
                                <h3 className='px-3 my-2'>{item.name}</h3>
                                <p className='px-3 my-2'>Description: {item.des}</p>
                                <h4 className='px-3 my-2'>Price:$ {item.price}</h4>
                                <h5 className='px-3 my-2'>Quantity: {item.quantity}</h5>
                                <h4 className='px-3 my-2'>Supplier name:{item.supplierName}</h4>
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
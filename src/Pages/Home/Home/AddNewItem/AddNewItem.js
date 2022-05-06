import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../../Auth/Firebase.init';
import './AddNewitem.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../../Shared/PageTitle/PageTitle';

const AddNewItem = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, event) => {
        axios.post('http://localhost:5000/bikes', data)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Import Item added')
                    event.target.reset()
                }
            })
        axios.post('http://localhost:5000/items', data)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    event.target.reset()
                }
            })
    }
    return (
        <div className='w-50 mx-auto col-sm-12'>
            <PageTitle title='Add New Item'></PageTitle>
            <h2 className='m-text text-center'>Add Your own Bike</h2>
            <form className='d-flex flex-column add-item-form' onSubmit={handleSubmit(onSubmit)}>
                <input type='text' {...register("name")} placeholder='Name' required />
                <input type="text" {...register("email")} value={user?.email} readOnly />
                <input type="text" alt="" {...register("photo")} placeholder='Photo url' required />
                <textarea type='text' {...register("des")} placeholder='Description' required />
                <input type="text" {...register("price")} placeholder='Price' required />
                <input type="text" {...register("quantity")} placeholder='Quantity' required />
                <input type="text" {...register("supplierName")} placeholder='Supplier name' required />
                <input className='btn btn-info w-50 mx-auto fs-5' type="submit" value='Add Now' />
            </form>
        </div>
    );
};

export default AddNewItem;
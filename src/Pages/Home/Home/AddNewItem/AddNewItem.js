import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../../Auth/Firebase.init';
import './AddNewitem.css'

const AddNewItem = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/bikes', data)
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='m-text text-center'>Add Your own Bike</h2>
            <form className='d-flex flex-column add-item-form' onSubmit={handleSubmit(onSubmit)}>
                <input type='text' {...register("name")} placeholder='Name' />
                <input type="text" {...register("email")} value={user?.email} readOnly />
                <input type="text" alt="" {...register("photo")} placeholder='Photo url' />
                <textarea type='text' {...register("des")} placeholder='Description' />
                <input type="text" {...register("price")} placeholder='Price' />
                <input type="text" {...register("quantity")} placeholder='Quantity' />
                <input type="text" {...register("supplierName")} placeholder='Supplier name' />
                <input className='btn btn-info w-50 mx-auto fs-5' type="submit" value='Add Now' />
            </form>
        </div>
    );
};

export default AddNewItem;
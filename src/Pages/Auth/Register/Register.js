import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../Firebase.init';
import Loading from '../Loading';
import './Register.css'

const Register = () => {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const hendleRegister = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        createUserWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate('/')
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        setErrorMessage(error?.message)
    }

    return (
        <div className='w-50 mx-auto my-5 register-box'>
            <h2 className='text-center my-4'>Please Register</h2>
            <form onSubmit={hendleRegister} className='d-flex flex-column my-4'>
                <input className='my-2 form-input' type="text" placeholder='Your name' />
                <input className='my-2 form-input' type="email" name="email" id="" placeholder='Your email' />
                <input className='my-2 form-input' type="password" name="password" id="" placeholder='Password' />
                <input className='input-btn w-50' type="submit" value="Register" />
            </form>
            <p>{errorMessage}</p>
            <div className='d-flex w-100 mx-4 mt-3'>
                <p>Already have an account?</p>
                <Link className='link mx-2' to='/login' role={'button'}> Please Login</Link>
            </div>

        </div>
    );
};

export default Register;
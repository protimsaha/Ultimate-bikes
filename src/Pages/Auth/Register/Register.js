import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className='w-50 mx-auto my-5 register-box'>
            <h2 className='text-center my-4'>Please Register</h2>
            <form className='d-flex flex-column my-4'>
                <input className='my-2 form-input' type="text" placeholder='Your name' />
                <input className='my-2 form-input' type="email" name="email" id="" placeholder='Your email' />
                <input className='my-2 form-input' type="password" name="password" id="" placeholder='Password' />
                <input className='input-btn' type="submit" value="Register" />
            </form>
            <div className='d-flex w-100 mx-4 mt-3'>
                <p>Already have an account?</p>
                <Link className='link mx-2' to='/login' role={'button'}> Please Login</Link>
            </div>

        </div>
    );
};

export default Register;
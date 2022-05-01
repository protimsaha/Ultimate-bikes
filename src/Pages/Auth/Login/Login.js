import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='w-50 mx-auto my-5 login-box'>
            <h2 className='text-center my-4'>Please Login</h2>
            <form className='d-flex flex-column my-4'>
                <input className='my-2 form-input' type="email" name="email" id="" placeholder='Your email' />
                <input className='my-2 form-input' type="password" name="password" id="" placeholder='Password' />
                <input className='input-btn' type="submit" value="Login" />
            </form>
            <div className='d-flex w-100 mx-4 mt-3'>
                <p>Don't have an account?</p>
                <Link className='link mx-2' to='/register' role={'button'}> Please register</Link>
            </div>
            <div className='d-flex align-items-center mb-4'>
                <div className='w-50 devider bg-primary'></div>
                <p className='mx-2 mt-3 px-4'>or</p>
                <div className='w-50 devider bg-primary'></div>
            </div>
            <div className='google-box'>
                <img className='g-img mx-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvLtL3h1BGECrFwVuENi82xhRiMweWKe6kLG-Sck2qTUyC_jX7vEcHC2MX8vCwrR-tlk&usqp=CAU" alt="" />
                <p className='fs-5 fw-bold mx-auto'>Continue with google</p>
            </div>
            <div className='google-box mt-4'>
                <img className='g-img mx-3' src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="" />
                <p className='fs-5 fw-bold mx-auto'>Continue with Github</p>
            </div>
        </div>
    );
};

export default Login;
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useAuthState, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
import Loading from '../Loading';


const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const [errorMessage, setErrorMessage] = useState('')

    const [user] = useAuthState(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    if (user || googleUser || githubUser) {
        navigate(from, { replace: true } || '/')
    }

    if (googleError || githubError) {
        return setErrorMessage(googleError?.message || githubError?.message)
    }
    if (googleLoading || githubLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-50 mx-auto my-5 login-box'>
            <h2 className='text-center my-4'>Please Login</h2>
            <form className='d-flex flex-column my-4'>
                <input className='my-2 form-input' type="email" name="email" id="" placeholder='Your email' />
                <input className='my-2 form-input' type="password" name="password" id="" placeholder='Password' />
                <input className='input-btn w-50' type="submit" value="Login" />
            </form>
            <p>{errorMessage}</p>
            <div className='d-flex w-100 mx-4 mt-3'>
                <p>Don't have an account?</p>
                <Link className='link mx-2' to='/register' role={'button'}> Please register</Link>
            </div>
            <div className='d-flex align-items-center mb-4'>
                <div className='w-50 devider bg-primary'></div>
                <p className='mx-2 mt-3 px-4'>or</p>
                <div className='w-50 devider bg-primary'></div>
            </div>
            <div onClick={() => signInWithGoogle()} className='google-box'>
                <img className='g-img mx-3' src="https://cdn.iconscout.com/icon/free/png-256/google-1772223-1507807.png" alt="" />
                <p className='fs-5 fw-bold mx-auto'>Continue with google</p>
            </div>
            <div onClick={() => signInWithGithub()} className='google-box mt-4'>
                <img className='g-img mx-3' src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="" />
                <p className='fs-5 fw-bold mx-auto'>Continue with Github</p>
            </div>
        </div>
    );
};

export default Login;
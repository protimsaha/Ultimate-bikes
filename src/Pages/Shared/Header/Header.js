import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import bikeLogo from './bike-logo.jpg'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Auth/Firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);


    return (
        <nav className="navbar navbar-expand-lg  navbar-light ">
            <div className="container d-flex justify-content-between">
                <div>
                    <Link className="navbar-brand" to="/">
                        <img className='header-img' src={bikeLogo} alt="" />
                    </Link>
                </div>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="my-link" aria-current="page" to="/">Home</Link>
                            <Link className="my-link" to="/inventory">Inventory</Link>
                            {
                                user && <>
                                    <Link className="my-link" to="/manage-inventory">Manage Inventory</Link>
                                    <Link className="my-link" to="/add-new">Add new item</Link>
                                    <Link className="my-link" to="/my-item">My item</Link>
                                </>
                            }
                            {
                                user ? <button className='logout-btn' onClick={() => signOut(auth)}>Logout</button> :
                                    <Link id='login-btn' to="login">Login</Link>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
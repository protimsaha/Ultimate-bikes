import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import bikeLogo from './bike-logo.jpg'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
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
                            <Link id='login-btn' to="login">Login</Link>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
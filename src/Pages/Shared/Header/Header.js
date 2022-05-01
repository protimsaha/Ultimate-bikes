import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container d-flex justify-content-between align-items-center">
                <div>
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div>
                    <div className="collapse navbar-collapse " id="navbarNav">

                        <ul className="navbar-nav">
                            <li className="nav-item to-link">
                                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item to-link">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item to-link">
                                <Link className="nav-link" to="#">Pricing</Link>
                            </li>
                            <li className="nav-item to-link">
                                <Link className="nav-link" to="#">Pricing</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
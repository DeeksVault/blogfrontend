import './Navbar.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-blue">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-10 mb-lg-10 fs-3">
                        <li className="nav-item me-5">
                            <NavLink className="nav-link Contest" to="/" activeClassName="active">Logo</NavLink>
                        </li>
                        <li className="nav-item me-5">
                            <NavLink className="nav-link Contest" to="/Contest" activeClassName="active">Contest</NavLink>
                        </li>
                        <li className="nav-item me-5">
                            <NavLink className="nav-link Contest" to="/Contest" activeClassName="active">Contest</NavLink>
                        </li>
                        <li className="nav-item me-5">
                            <NavLink className="nav-link Practice" to="/Practice" activeClassName="active">Practice</NavLink>
                        </li>
                        <li className="nav-item me-5">
                            <NavLink className="nav-link AppliedJobs" to="/AppliedJobs" activeClassName="active">Appliedjobs</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success me-5 bg-grey" type="submit">Search</button>
                    </form>
                    <NavLink className="nav-link Profile me-5" to="/Profile" activeClassName="active">
                        <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-secondary" style={{ width: '40px', height: '40px' }}></div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

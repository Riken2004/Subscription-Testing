import React from "react";
import { Outlet, Link } from "react-router-dom";
import './NavigationBar.css';

function NavigationBar() {
    return (
        <div className="navbar">
            <Link className="link" to="/">
                Home
            </Link>
            <Link className="link" to="/about">
                About
            </Link>
            <Link className="link" to="/pricing">
                Pricing
            </Link>
            <Link className="link" to="/login">
                Login
            </Link>
            <div className="outlet-container">
                <Outlet />
            </div>
        </div>
    );
}

export default NavigationBar;

// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Cake Shop</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/cakes">Cakes</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </nav>
    );
}

export default Navbar;

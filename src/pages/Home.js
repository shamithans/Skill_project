// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <h2>Welcome to the Cake Shop!</h2>
            <p>Find your favorite cakes and add them to your cart.</p>
            <Link to="/cakes" className="btn">Browse Cakes</Link>
        </div>
    );
}

export default Home;

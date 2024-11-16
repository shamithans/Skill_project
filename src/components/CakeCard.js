// src/components/CakeCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function CakeCard({ cake }) {
    return (
        <div className="cake-card">
            <img src={cake.image} alt={cake.name} />
            <h3>{cake.name}</h3>
            <p>{cake.price}</p>
            <Link to={`/cakes/${cake.id}`} className="btn">View Details</Link>
        </div>
    );
}

export default CakeCard;

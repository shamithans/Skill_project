// src/pages/CakeDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const cakeDetailsData = {
    1: { name: 'Chocolate Cake', price: '20', description: 'Rich and moist chocolate cake.' },
    2: { name: 'Vanilla Cake', price: '15', description: 'Classic vanilla cake with a creamy texture.' },
    // Add more details as needed
};

function CakeDetails() {
    const { id } = useParams();
    const cake = cakeDetailsData[id];

    return (
        <div className="cake-details">
            <h2>{cake.name}</h2>
            <p>Price: {cake.price}</p>
            <p>{cake.description}</p>
            <button className="btn">Add to Cart</button>
        </div>
    );
}

export default CakeDetails;

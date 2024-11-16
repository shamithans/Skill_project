// src/pages/Cakes.js
import React from 'react';
import CakeCard from '../components/CakeCard';

const cakesData = [
    { id: 1, name: 'Chocolate Cake', price: 'rupees 220', image: 'https://tse4.mm.bing.net/th?id=OIP.zJ4OwfLZrL9qABqx-HSYWwHaHa&pid=Api&P=0&h=180' },
    { id: 2, name: 'Vanilla Cake', price: 'rupees 115', image: 'https://tse3.mm.bing.net/th?id=OIP.ZIQ1S_VWCELnbWiGuuPZpgHaKX&pid=Api&P=0&h=180' },
    // Add more cakes as needed
];

function Cakes() {
    return (
        <div className="cakes">
            <h2>Our Cakes</h2>
            <div className="cakes-grid">
                {cakesData.map((cake) => (
                    <CakeCard key={cake.id} cake={cake} />
                ))}
            </div>
        </div>
    );
}

export default Cakes;

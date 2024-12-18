import React from 'react';
import './Toners.css'; // Import the CSS file

// Product data for toners
const toners = [
    {
        id: 1, // First toner
        name: 'Glow Recipe Toner',
        description: 'Reveal a dewy glow instantly and over time with this niacinamide-infused highlighting serum, formulated without mica, glitter, or pearls. ',
        price: 'ksh. 4500',
        image: '/images/GlowRecipeToner.png', // Replace with the correct image path
    },
    {
        id: 2, // Second toner
        name: 'Gycolic Acid Toner',
        description: 'Glycolic Acid 7% Exfoliating Toner is a water-based, exfoliating toner formulated with 7% glycolic acid, a proven alpha-hydroxy acid (AHA) that effectively exfoliates the skin.',
        price: 'ksh. 2800',
        image: '/images/GycolicAcidToner.png', // Replace with the correct image path
    },
    {
        id: 3,
        name: 'Anua Soothing Toner',
        description: 'Perfectly formulated to soothe, tone, hydrate, and balance the PH level of skin.',
        price: 'ksh 5000',
        image: '/images/AnuaToner.png',

    },
    {
        id: 4,
        name: 'Cerave Hydrating Toner',
        description: 'Developed with dermatologists, CeraVe Hydrating Toner, with ceramides, hyaluronic acid, and niacinamide, helps restore the skin’s natural protective barrier for improved hydration, and helps visibly smooth and calm skin.',
        price: 'ksh. 3900',
        image: '/images/CeraveHydratingToner.png',
    }
];

function Toners() {
    return (
        <div className="toners-container">
            <h1>Our Toners</h1>
            <div className="toners-grid">
                {toners.map(toner => (
                    <div key={toner.id} className="toner-card">
                        <img
                            src={toner.image}
                            alt={toner.name}
                            className="toner-image"
                        />
                        <div className="toner-info">
                            <h2>{toner.name}</h2>
                            <p>{toner.description}</p>
                            <p>{toner.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Toners;


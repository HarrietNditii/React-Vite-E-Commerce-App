import React from 'react';
import './FaceOils.css'; // Import the CSS file

// Product data for face oils
const faceOils = [
    {
        id: 1,
        name: 'Palmers Oil',
        description: 'Palmer\'s Cocoa Butter Formula Moisturizing Body Oil, enriched with Vitamin E, is a fast absorbing, lightly scented body oil that helps moisturize and soothe rough, dry skin without greasiness. ',
        price: 'ksh. 2800',
        image: '/images/PalmersOil.png', // Replace with the correct image path
    },
    {
        id: 2,
        name: 'Juno Face Oil',
        description: 'An obsession-worthy face oil, Juno gives an instant glow to dry skin by restoring and rehydrating the skin’s natural moisture barrier with a blend of organic, cold-pressed, antioxidant-rich, superfood seed oils.',
        price: 'ksh. 1200',
        image: '/images/JunoFaceOil.png', // Replace with the correct image path
    },
    {
        id: 3,
        name: 'Ordinary Oil',
        description: 'Soothes, Smooths, Promotes Firmness',
        price: 'ksh. 1800',
        image: '/images/OrdinaryOil.png',
    }
];

function FaceOils() {
    return (
        <div className="faceoils-container">
            <h1>Our Face Oils</h1>
            <div className="faceoils-grid">
                {faceOils.map(faceOil => (
                    <div key={faceOil.id} className="faceoil-card">
                        <img
                            src={faceOil.image}
                            alt={faceOil.name}
                            className="faceoil-image"
                        />
                        <div className="faceoil-info">
                            <h2>{faceOil.name}</h2>
                            <p>{faceOil.description}</p>
                            <p>{faceOil.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FaceOils;

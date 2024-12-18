import React from 'react';
import './Moisturizers.css'; // Import the CSS file

// Product data for moisturizers
const moisturizers = [
    {
        id: 1, // First moisturizer
        name: 'Cerave Moisturizer',
        description: 'CeraVe Moisturizing Cream is a rich, non-greasy, fast-absorbing moisturizer with three essential ceramides that lock in skin\'s moisture and help maintain the skin\'s protective barrier.',
        price: 'ksh. 3000',
        image: '/images/CeraveMoisturizer.png',
    },
    {
        id: 2, // Second moisturizer
        name: 'Bio Oil Moisturizer',
        description: 'Bio-Oil Dry Skin Gel 50ML is a revolutionary skincare product designed to combat dry, flaky skin. This oil-based gel provides intense hydration without the greasy feel of traditional moisturizers.',
        price: 'ksh. 1000',
        image: '/images/BioOilMoisturizer.png',
    },
    {
        id: 3,
        name: 'NeutrogenaMoisturizer',
        description: 'Instantly quench dry skin for a healthy-looking glow day after day. This award-winning formula with Hyaluronic Acid absorbs quickly like a gel but has the lasting, intense moisturizing power of a cream.',
        price: 'ksh. 2500',
        image: '/images/NeutrogenaMoisturizer.png',
    },
    {
        id: 4,
        name: 'Renewing Cream Moisturizer',
        description: 'The best Korean moisturizers are the crème de la crème of K-beauty. Unstoppably hydrating, these moisturizers make glass skin glassy, dewy skin dewy, and our bank accounts happy. ',
        price: 'ksh. 4500',
        image: '/images/RenewingCreamMoisturizer.png',
    }
];

function Moisturizers() {
    return (
        <div className="moisturizers-container">
            <h1>Our Moisturizers</h1>
            <div className="moisturizers-grid">
                {moisturizers.map(moisturizer => (
                    <div key={moisturizer.id} className="moisturizer-card">
                        <img
                            src={moisturizer.image}
                            alt={moisturizer.name}
                            className="moisturizer-image"
                        />
                        <div className="moisturizer-info">
                            <h2>{moisturizer.name}</h2>
                            <p>{moisturizer.description}</p>
                            <p>{moisturizer.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Moisturizers;


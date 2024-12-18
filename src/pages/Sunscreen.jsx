import React from 'react';
import './Sunscreen.css'; // Import the CSS file

// Product data for sunscreens
const sunscreens = [
    {
        id: 1,
        name: 'Aveeno Sunscreen',
        description: ' Regularly using Aveeno sunscreen combined with other protective measures can significantly reduce your risk of skin cancer and can also help keep your skin looking healthier and smoother for longer.',
        price: 'ksh. 2800',
        image: '/images/AveenoSunscreen.png',
    },
    {
        id: 2,
        name: 'Cerave Sunscreen',
        description: ' Multi-benefit sunscreen helps protect from the sun while also delivering instant hydration that lasts all day long, blends seamlessly for an invisible look and weightless, non-greasy feel',
        price: 'ksh. 3700',
        image: '/images/CeraveSunscreen.png',
    },
    {
        id: 3,
        name: 'GlowScreenSunscreen',
        description: 'An SPF 40 makeup-gripping primer that leaves a dewy, glowy finish, with sun protection and major hydration.',
        price: 'ksh. 5000',
        image: '/images/GlowScreenSunscreen.png',

    },
    {
        id: 4,
        name: 'La Roche Posay Sunscreen',
        description: 'Protect dry and dehydrated skin from UVA and UVB rays with the La Roche-Posay Anthelios Hydrating Cream SPF50+, a daily facial sunscreen than keeps the complexion nourished and comforted.',
        price: 'ksh. 5000',
        image: '/images/LaRochePosaySunscreen.png',
    }
];

function Sunscreen() {
    return (
        <div className="sunscreen-container">
            <h1>Our Sunscreens</h1>
            <div className="sunscreen-grid">
                {sunscreens.map(sunscreen => (
                    <div key={sunscreen.id} className="sunscreen-card">
                        <img
                            src={sunscreen.image}
                            alt={sunscreen.name}
                            className="sunscreen-image"
                        />
                        <div className="sunscreen-info">
                            <h2>{sunscreen.name}</h2>
                            <p>{sunscreen.description}</p>
                            <p>{sunscreen.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sunscreen;


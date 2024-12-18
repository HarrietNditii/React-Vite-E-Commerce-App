import React from 'react';
import './Serums.css';

const serums = [
    {
        id: 1, // This is the Hydrating Serum
        name: 'Brightening Serum',
        description: 'A skin brightening serum is a product with high-performance ingredients designed to visibly reduce dullness and discoloration.',
        price: 'ksh. 2000',
        image: '/images/BrighteningSerum.png',
    },


    {
    id: 2, // This is the Dark Spot Correcting Serum
    name: 'Dark Spot Correcting Serum',
    description: 'Tackle hyperpigmentation with this serum formulated with 10% niacinamide and 4% tranexamic acid to fade dark spots and acne scars. It contains alpha-arbutin to brighten and even skin tone, as well as hyaluronic acid and botanical oils to moisturize and soothe skin.',
    price: 'ksh. 2500 ',
    image: '/images/DarkSpotCorrectingSerum.png',

},
    {
        id: 3, // This is a Gycolic Acid Serum
        name: 'Gycolic Acid Serum',
        description: 'This lightweight glycolic acid serum, suitable for multiple skin tones, helps reduce the look of dark spots and discolorations and reveals brighter, more even looking skin. This serum combines concentrated 10% pure glycolic acid, tranexamic acid (TXA), lipo-hydroxy acid, and vitamin B5 for optimal effectiveness while also being suitable for sensitive skin. *Enhanced formula previously known as Mela-D Serum.\n' +
            '\n',
        price: 'ksh. 3500',
        image: '/images/GycolicAcidSerum.png',
    },
    {
        id: 4, // This is a Hylauronic Acid Serum
        name: 'Hylauronic Acid Serum',
        description: 'Hyaluronic Acid Water-Infused Serum is a highly effective skincare product designed to deeply hydrate and revitalize the skin. Formulated with powerful ingredients, including hyaluronic acid and natural plant extracts, this serum is designed to improve the skin’s elasticity, plump and smooth fine lines and wrinkles, and enhance the overall appearance of the skin.',
        price: 'ksh. 4000',
        image: '/images/HylauronicAcidSerum.png',

    },
    {
        id: 5, //This is a Hyalu Serum
        name: 'Hyalu Serum B5',
        description: 'This anti-aging ultra hydrating pure hyaluronic acid face and neck serum leaves skin feeling plump to the touch and helps repair skin by replenishing the natural moisture barrier. ',
        price: 'ksh. 4500',
        image: '/images/HyaluSerum.png',

    }

];
function Serums() {
    return (
        <div className="serums-container">
            <h1>Our Serums</h1>
            <div className="serums-grid">
                {serums.map(serum => (
                    <div key={serum.id} className="serum-card">
                        <img src={serum.image} alt={serum.name} className="serum-image" />
                        <div className="serum-info">
                            <h2>{serum.name}</h2>
                            <p>{serum.description}</p>
                            <p>{serum.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Serums;

import React from 'react';
import './SkinCareTips.css'; // Optional for custom styles

function SkinCareTips() {
    return (
        <div className="skincare-tips">
            <h1>Why Does Our Skin Need a Moisturizer?</h1>
            <p>
                How is moisture stored in our skin and why do we lose it?
            </p>
            <p>
                Once the water has left the living skin cells, it diffuses to the skin surface bound to the so-called natural moisturising factors.
                At the upper layers of the skin, the hydro-lipid barrier protects the skin from losing these moisturising factors.
                Many external as well as internal influences can affect the skin’s hydro-lipid barrier, thus leading to an enhanced loss of moisturisers,
                resulting in a reduced water binding capacity and finally dry skin.
            </p>

            <h2>How Do Moisturising Creams Work on Our Skin?</h2>
            <p>
                Moisturisers work by adding humectants back into the skin, thereby regenerating the skin’s water-binding capacity,
                and strengthen the hydro-lipid skin barrier function to prevent moisture from evaporating off the skin’s surface.
            </p>

            <h2>Why Does the Skin Need a Different Moisturizer Than the Body?</h2>
            <p>
                Facial skin is particularly thin and sensitive, thus more susceptible and actually also more exposed to environmental influences.
            </p>

            <h2>It’s All in the Technique – How to Apply Your Face Cream the Right Way</h2>
            <ul>
                <li>Make sure to always wash your hands thoroughly before applying any creams or moisturisers to your face to avoid spreading bacteria.</li>
                <li>
                    Use the right amount of face cream, depending on your skin type and whether you’re using a rich cream or a light moisturiser.
                    If using a tinted day cream, make sure to apply it evenly for a perfect finish.
                </li>
                <li>Do not rub in the cream, but use your fingertips to gently massage it in without tugging on any areas.</li>
                <li>Be very gentle around any areas of irritation or blemishes and only apply mild creams to those sensitive areas.</li>
            </ul>

            <h2>Each Skin Type Has Different Needs</h2>
            <p>
                Every woman is different, and so is every skin type. For your daily skin care, make sure you use a face cream that suits your skin type:
            </p>
            <ul>
                <li>
                    <strong>Combination skin:</strong> People with combination skin usually have a mixture of dry and oily areas.
                    Usually, it’s oily around what’s known as the T-zone (the forehead, nose, and chin) and can be normal to dry around the cheeks.
                </li>
                <li>
                    <strong>Oily skin:</strong> Occurs when the sebum glands produce too much oil and can lead to visible pores, a shiny complexion, and possible blemishes.
                </li>
                <li>
                    <strong>Dry skin:</strong> Less elastic and can be irritated and flaky, particularly in dry air and cold conditions (cold seasons, air condition).
                </li>
                <li>
                    <strong>Normal skin:</strong> Usually well-balanced with a smooth texture and is neither too oily nor too dry.
                </li>
                <li>
                    <strong>Sensitive skin:</strong> Can react easily to environmental factors and often suffers from redness, tightness, dryness, and blemishes.
                </li>
            </ul>
            <p>Find out more about your skin type here.</p>
        </div>
    );
}

export default SkinCareTips;

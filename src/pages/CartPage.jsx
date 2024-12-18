import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartPage() {
    const { cart, removeFromCart } = useContext(CartContext);
    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            {cart.length === 0 ? <p>Your cart is empty.</p> : (
                cart.map(item => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
}
export default CartPage;
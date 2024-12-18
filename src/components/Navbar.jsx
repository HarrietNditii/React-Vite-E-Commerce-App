import React from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router for navigation
import './Navbar.css'; // Path to your CSS file

const Navbar = () => {
    return (
        <header style={{ backgroundColor: '#333', padding: '10px 20px', color: '#fff' }}>
            {/* Search Bar and Cart on top */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search..."
                    style={{
                        padding: '5px 10px',
                        fontSize: '16px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        width: '300px'
                    }}
                />

                {/* Cart Icon */}
                <div>
                    <Link to="/cart" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>
                        🛒 Cart
                    </Link>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav style={{ backgroundColor: '#222', padding: '10px 0' }}>
                <ul style={{ display: 'flex', listStyleType: 'none', padding: 0, margin: 0, justifyContent: 'center' }}>
                    <li style={{ margin: '0 15px' }}>
                        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
                    </li>
                    <li style={{ margin: '0 15px' }}>
                        <Link to="/skin-care-tips" style={{ color: '#fff', textDecoration: 'none' }}>Skin Care Tips</Link>
                    </li>
                    <li style={{ margin: '0 15px' }}>
                        <Link to="/serums" style={{ color: '#fff', textDecoration: 'none' }}>Serums</Link>
                    </li>
                    <li style={{ margin: '0 15px' }}>
                        <Link to="/moisturizers" style={{ color: '#fff', textDecoration: 'none' }}>Moisturizers</Link>
                    </li>
                    <li style={{ margin: '0 15px' }}>
                        <Link to="/toners" style={{ color: '#fff', textDecoration: 'none' }}>Toners</Link>
                    </li>
                    <li style={{ margin: '0 15px' }}>
                        <Link to="/sunscreen" style={{ color: '#fff', textDecoration: 'none' }}>Sunscreen</Link>
                    </li>
                    <li style={{ margin: '0 15px' }}>
                        <Link to="/face-oils" style={{ color: '#fff', textDecoration: 'none' }}>Face Oils</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;



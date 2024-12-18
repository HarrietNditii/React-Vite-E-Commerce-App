import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import axios from '../services/api';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/products').then((response) => setProducts(response.data));
    }, []);

    return (
        <div className="home">
            {/* Navigation Bar */}
            <nav>
                {/* Your navigation content*/}
            </nav>

            {/* Heading above the image */}
            <h1>Welcome to IvyBeauty.com</h1>

            {/* Image below the heading */}
            <div className="image-container" style={{ textAlign: "center", marginTop: "20px" }}>
                <img
                    src="/images/skincare.png"
                    alt="Skincare Products"
                    style={{ width: "100%", maxwidth: "1200px", height: "auto", marginBottom: "20px" }}
                    />
            </div>
            <div className="products-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>

        </div>
    );
}
export default Home;

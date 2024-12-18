import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from '../services/api';

function ProductDetails() {
    const {id} = useParams();
    const [products, setProducts] = useState(null);

    useEffect(() => {
        axios.get(`/products/${id}`).then((response) => setProduct(response.data));

    }, [id]);

    if (!product) return <p>Loading...</p>;
    return (
        <div className="product-details">
            <img src={product.image} alt={product.name}/>
            <h1>{Product.name}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}
export default ProductDetails;
